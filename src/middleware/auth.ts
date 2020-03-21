import { Request, Response, NextFunction } from 'express';
import config from 'config';
import jwt, { DecodeOptions } from 'jsonwebtoken';

export default function(req: Request, res: Response, next: NextFunction) {
  const token: string | undefined = req.header('x-auth-token');
  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    // TODO: add interface for that
    const decoded: any = jwt.verify(token as string, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: error });
  }
}
