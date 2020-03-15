import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const token: string = 'token';
  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    req = { _id: 'asjfq4iwhornq7os74' };
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}
