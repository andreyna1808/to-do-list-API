import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { IUpdateUser, IUsersRepository } from '../interface';

@injectable()
class UpdateUsesService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async update({ id, name, email, password }: IUpdateUser) {
    const usersExists = await this.usersRepository.findByEmail(email);
    const updateUser = await this.usersRepository.findById(id);

    if (!updateUser) {
      throw new AppError('User not found', 404);
    }

    if (usersExists && email !== updateUser.email) {
      throw new AppError('There is already one product with this email', 409);
    }

    updateUser.name = name;
    updateUser.email = email;
    updateUser.password = password;

    await this.usersRepository.save(updateUser);

    return updateUser;
  }
}

export { UpdateUsesService };
