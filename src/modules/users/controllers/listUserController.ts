import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersService } from '../services/ListUserService';

class ListUsersControllers {
  async list(req: Request, res: Response) {
    const user = container.resolve(ListUsersService);
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 15;

    const products = await user.list({ page, limit });
    return res.status(200).json(instanceToInstance(products));
  }

  async listById(req: Request, res: Response) {
    const user = container.resolve(ListUsersService);
    const { id } = req.params;

    const productById = await user.listById(id);
    return res.status(200).json(instanceToInstance(productById));
  }
}

export { ListUsersControllers };
