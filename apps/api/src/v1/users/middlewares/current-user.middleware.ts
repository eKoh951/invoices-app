import {
  CacheModule,
  CACHE_MANAGER,
  Inject,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersServiceV1 } from '../users.service';
import { UserDto } from '../dto/users.dto';
import { Cache } from 'cache-manager';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: UserDto;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(
    private usersService: UsersServiceV1,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userId = req.auth?.payload?.sub.replace(/\|/g, '%7C');

    const cachedUser = await this.cacheManager.get<UserDto>(userId);

    if (cachedUser) {
      req.user = cachedUser;
      return next();
    }

    const user = await this.usersService.getUserByAuthId(userId);
    req.user = user;

    await this.cacheManager.set(userId, user, 0);

    next();
  }
}
