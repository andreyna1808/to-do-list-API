import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTaskService } from '../services/createTaskService';

class CreateTaskControllers {
  async create(req: Request, res: Response) {
    const task = container.resolve(CreateTaskService);

    const { title } = req.body;
    const task_id = req.user.id;

    const createTask = await task.create({ title, task_id });
    return res.status(201).json(instanceToInstance(createTask));
  }
}

export { CreateTaskControllers };
