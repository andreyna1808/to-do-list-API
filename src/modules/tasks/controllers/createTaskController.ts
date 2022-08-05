import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTaskService } from '../services/createTaskService';

class CreateTaskControllers {
  async create(req: Request, res: Response) {
    const task = container.resolve(CreateTaskService);

    const { title } = req.body;
    // const { task_id } = req.params;
    const task_id = req.user.id;

    console.log('title', task_id);

    const createProduct = await task.create({ title, task_id });
    return res.status(201).json(instanceToInstance(createProduct));
  }
}

export { CreateTaskControllers };
