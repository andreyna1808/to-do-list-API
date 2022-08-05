import { Router } from 'express';

import IsAuth from '../../../utils/isAuth';
import { CreateUsersControllers } from '../controllers/createUserController';
import { DeleteUsersControllers } from '../controllers/deleteUserController';
import { ListUsersControllers } from '../controllers/listUserController';
import { UpdateUsersControllers } from '../controllers/updateUserController';

const listUsersController = new ListUsersControllers();
const createUsersController = new CreateUsersControllers();
const updateUsersController = new UpdateUsersControllers();
const deleteUsersController = new DeleteUsersControllers();

const users = Router();

users.get('/', IsAuth, listUsersController.list);
users.get('/:id', listUsersController.listById);
users.post('/', createUsersController.create);
users.put('/:id', updateUsersController.update);
users.delete('/:id', deleteUsersController.delete);

export { users };
