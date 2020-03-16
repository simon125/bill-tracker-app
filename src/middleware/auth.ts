import { Request, Response, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  const token: string = 'token';
  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    // req.user.id = 'qwertyu1234567rewq';
    req.user = 'string';
    next();
  } catch (error) {
    res.status(401).json({ msg: error });
  }
}
