import { Router } from 'express';

import { task } from '../modules/tasks/routes';
import { users } from '../modules/users/routes';
import { session } from '../modules/userToken/routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.json(
    'Hello Dev!! Welcome To Do List API by Andreyna Carvalho, please use routes BASE_URL/todo-doc',
  );
});

routes.use('/users', users);
routes.use('/session', session);
routes.use('/task', task);

export { routes };
