import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Cache } from 'cache-manager';
import { AppwriteService } from 'src/modules/appwrite/appwrite.service';
import { Account } from 'node-appwrite';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  private readonly appwriteAccounts: Account;

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private appwriteService: AppwriteService
  ) {
    this.appwriteAccounts = this.appwriteService.getAccount();
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.split(' ')[1];

    this.appwriteAccounts.client.setJWT(token);

    const user = await this.appwriteAccounts.get();

    if (user) {
      req.user = user;
    }

    next();
  }
}
