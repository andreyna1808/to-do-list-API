import { Router } from 'express';

import { SessionsControllers } from '../controllers/sessionControllers';

const sessionController = new SessionsControllers();
const session = Router();

session.post('/', sessionController.createSession);

export { session };
