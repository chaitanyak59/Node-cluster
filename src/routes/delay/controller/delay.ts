import { Request, Response, NextFunction } from 'express';

const emitPromiseResult = (): Promise<string> => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Delay Emitted')
        }, 1500);
    })
}

export async function delayHandler(req: Request, res: Response, next: NextFunction) {
 const result = await emitPromiseResult();
 res.send({
     msg: result
 })
}