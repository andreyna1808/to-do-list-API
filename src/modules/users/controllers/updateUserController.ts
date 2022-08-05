import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUsesService } from '../services/UpdateUserService';

class UpdateUsersControllers {
  async update(req: Request, res: Response) {
    const user = container.resolve(UpdateUsesService);

    const { name, email, password } = req.body;
    const { id } = req.params;

    const updateUsers = await user.update({
      id,
      name,
      email,
      password,
    });
    return res.json(instanceToInstance(updateUsers));
  }
}

export { UpdateUsersControllers };
