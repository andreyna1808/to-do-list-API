import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTaskService } from '../services/updateTaskService';

class UpdateTaskControllers {
  async update(req: Request, res: Response) {
    const user = container.resolve(UpdateTaskService);

    const { title, completed } = req.body;
    const { id } = req.params;
    const task_id = req.user.id;

    const updateTask = await user.update({
      task_id,
      id,
      title,
      completed,
    });
    return res.json(instanceToInstance(updateTask));
  }
}

export { UpdateTaskControllers };
