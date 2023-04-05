import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';
import { Auth0 } from '../../config/interfaces/env.config.interface';

@Injectable()
export class ValidateAccessToken implements NestMiddleware {
  constructor(private configService: ConfigService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const { domain, audience } = this.configService.get<Auth0>('auth0');

    auth({
      issuerBaseURL: 'https://' + domain,
      audience,
    })(req, res, next);
  }
}
