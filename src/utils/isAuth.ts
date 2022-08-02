/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AuthConfig } from '../config/auth';
import { AppError } from './appError';

interface ISub {
  sub: string;
}

export default function IsAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing');
  }

  const [bearer, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, AuthConfig.jwt);

    const { sub } = decodedToken as ISub;

    req.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token');
  }
}
