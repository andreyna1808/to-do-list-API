import { Router } from 'express';

import IsAuth from '../../../utils/isAuth';
import { CreateTaskControllers } from '../controllers/createTaskController';
import { DeleteTaskControllers } from '../controllers/deleteTaskController';
import { ListTaskControllers } from '../controllers/listTaskController';
import { UpdateTaskControllers } from '../controllers/updateTaskController';

const listTaskController = new ListTaskControllers();
const createTaskController = new CreateTaskControllers();
const updateTaskController = new UpdateTaskControllers();
const deleteTaskController = new DeleteTaskControllers();

const task = Router();

task.use(IsAuth);
task.get('/', listTaskController.list);
task.get('/:id', listTaskController.listById);
task.post('/', createTaskController.create);
task.put('/:id', updateTaskController.update);
task.delete('/:id', deleteTaskController.delete);

export { task };
