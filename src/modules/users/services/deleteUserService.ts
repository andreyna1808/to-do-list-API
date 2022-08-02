import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { IUsersRepository } from '../interface';

@injectable()
class DeleteUsersService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async delete(id: string) {
    const removeUser = await this.usersRepository.findById(id);

    if (!removeUser) {
      throw new AppError('User not found', 404);
    }

    await this.usersRepository.remove(removeUser);
  }
}

export { DeleteUsersService };
