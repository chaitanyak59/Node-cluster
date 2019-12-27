import * as express from 'express';
import { pingHandler } from './controllers/ping';
import { wrapper } from '../../utils/wrapper';

const pingRouter = express.Router();

pingRouter.get('', wrapper(pingHandler))

export default pingRouter;