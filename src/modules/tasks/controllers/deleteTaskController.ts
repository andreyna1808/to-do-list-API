import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTaskService } from '../services/deleteTaskService';

class DeleteTaskControllers {
  async delete(req: Request, res: Response) {
    const task = container.resolve(DeleteTaskService);
    const { id } = req.params;
    const task_id = req.user.id;

    await task.delete(id, task_id);
    return res.status(200).json({ message: 'user removed successfully' });
  }
}

export { DeleteTaskControllers };
