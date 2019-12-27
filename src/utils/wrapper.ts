import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

export const wrapper = (fn) => (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
            next(error);
        } else {
            return res.status(INTERNAL_SERVER_ERROR).json(({ status: false, error: 'something went wrong' }));
        }
    });
};

export function appErrorHandler(err, req: Request, res: Response, next: NextFunction) {
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`something wen't wrong`);
    }
    res.status(500).send(`hey!! we caugth the error 👍👍, ${err} `);
  }