import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTaskService } from '../services/listTaskService';

class ListTaskControllers {
  async list(req: Request, res: Response) {
    const task = container.resolve(ListTaskService);
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 500;

    const { id } = req.user;

    const products = await task.list({ page, limit }, id);
    return res.status(200).json(instanceToInstance(products));
  }

  async listById(req: Request, res: Response) {
    const task = container.resolve(ListTaskService);
    const { id } = req.params;

    const productById = await task.listById(id);
    return res.status(200).json(instanceToInstance(productById));
  }
}

export { ListTaskControllers };
