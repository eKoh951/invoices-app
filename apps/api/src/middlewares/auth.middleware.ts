import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

@Injectable()
export class ValidateAccessToken implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    auth({
      issuerBaseURL: `https://asure.us.auth0.com`,
      audience: 'invoice-api',
    })(req, res, next);
  }
}
