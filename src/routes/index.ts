import { Express } from 'express';
import { errorHandlerRoute as NotFound } from './404';
import { appErrorHandler } from '../utils/wrapper';
import pingRouter from './ping/route';
import delayRouter from './delay/route';

function initRoutes(app: Express) {
    app.use('/ping', pingRouter)
    app.use('/delay', delayRouter)
    app.use(appErrorHandler)
    app.use('*', NotFound)
}

export {
    initRoutes
}