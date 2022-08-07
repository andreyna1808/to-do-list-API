import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUsersService } from '../services/deleteUserService';

class DeleteUsersControllers {
  async delete(req: Request, res: Response) {
    const user = container.resolve(DeleteUsersService);
    const { id } = req.params;

    await user.delete(id);
    return res.status(200).json({ message: 'User removed successfully' });
  }
}

export { DeleteUsersControllers };
