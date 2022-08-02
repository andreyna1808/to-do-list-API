import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import { users } from '../modules/users/routes';
import swaggerFile from '../swagger.json';

const routes = Router();

routes.get('/', (req, res) => {
  res.json(
    'Hello Dev!! Welcome To Do List API by Andreyna Carvalho, please use routes BASE_URL/todo-doc',
  );
});

routes.use('/users', users);
/* routes.use('/session', session);
routes.use('/task', task); */
routes.use('/todo-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { routes };
