import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';
import { Auth0App } from 'src/interfaces/env.config.interface';

@Injectable()
export class ValidateAccessToken implements NestMiddleware {
  constructor(private configService: ConfigService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const { domain, audience } = this.configService.get<Auth0App>('auth0.app');

    auth({
      issuerBaseURL: domain,
      audience,
    })(req, res, next);
  }
}
