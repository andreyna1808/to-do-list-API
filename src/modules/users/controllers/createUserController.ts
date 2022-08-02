import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUsersService } from '../services/createUserService';

class CreateUsersControllers {
  async create(req: Request, res: Response) {
    const user = container.resolve(CreateUsersService);

    const { name, email, password } = req.body;

    const createProduct = await user.create({
      name,
      email,
      password,
    });
    return res.status(201).json(instanceToInstance(createProduct));
  }
}

export { CreateUsersControllers };
