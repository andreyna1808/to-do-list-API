import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTaskService } from '../services/updateTaskService';

class UpdateTaskControllers {
  async update(req: Request, res: Response) {
    const user = container.resolve(UpdateTaskService);

    const { name, completed } = req.body;
    const { id } = req.params;
    const idUser = req.user.id;

    const updateProduct = await user.update({
      task_id: idUser,
      id,
      name,
      completed,
    });
    return res.json(instanceToInstance(updateProduct));
  }
}

export { UpdateTaskControllers };
