import * as express from 'express';
import { wrapper } from '../../utils/wrapper';
import { delayHandler } from './controller/delay';

const delayRouter = express.Router();

delayRouter.get('', wrapper(delayHandler))

export default delayRouter;