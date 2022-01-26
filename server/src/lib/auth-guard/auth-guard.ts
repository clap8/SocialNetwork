import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export const AuthenticateGuard = passport.authenticate('jwt', { session: false });

export interface IAuthorizeItem {
  role: string;
  when?: (req: Request) => boolean;
};

export default function AuthGuard(items?: IAuthorizeItem[]) {
  return [AuthenticateGuard, AuthorizeGuard(items)];
};

export function AuthorizeGuard(items?: IAuthorizeItem[]) {
  return async function (req: Request, res: Response, next: NextFunction) {
    let user = req.user;
    if (!user) {
      return res.status(500).send('Access not allowed !');
    }

    if (typeof req.user.hasRole !== 'function') {
      throw new Error('User object must have hasRole method');
    }

    if (!items || items.length == 0) {
      return next();
    }

    for (let item of items) {
      if (req.user.hasRole(item.role)) {
        if (!item.when) {
          return next();
        }
        else {
          
          if (item.when(req)) {
            return next();
          }
        }
      }
    }

    res.status(500).send('Access not allowed !');
  }
};