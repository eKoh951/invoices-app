import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Auth0Utils } from 'src/utils/auth0.utils';
import { Cache } from 'cache-manager';
import { User } from 'auth0';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(
    private auth0Utils: Auth0Utils,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userId = req.auth?.payload?.sub;

    const cachedUser = await this.cacheManager.get(userId);

    if (cachedUser) {
      req.user = cachedUser;
      return next();
    }

    const user = await this.auth0Utils.getUserById(userId);
    req.user = user;

    await this.cacheManager.set(userId, user, 0);

    next();
  }
}
