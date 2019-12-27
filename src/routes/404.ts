import { Request, Response, NextFunction } from 'express';
import { NOT_FOUND } from 'http-status-codes';

export function errorHandlerRoute(req: Request, res: Response) {
    return res.status(NOT_FOUND).json(({ status: false, error: '👀👀 nothing found here!!' }));
}