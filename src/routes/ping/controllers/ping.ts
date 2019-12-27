import { Request, Response, NextFunction } from 'express';
export async function pingHandler(req: Request, res: Response, next: NextFunction) {
   return res.send({
        message: 'You Pinged Me!'
    })
}