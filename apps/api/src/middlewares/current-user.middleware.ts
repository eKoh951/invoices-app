import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersServiceV1 } from '../v1/users/users.service';
import { UserDto } from '../v1/users/dto/users.dto';

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
  constructor(private usersService: UsersServiceV1) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const email = req.body.email;

    if (email) {
      const user = await this.usersService.createOrGetUser(email);
      req.user = user;
    }

    next();
  }
}
