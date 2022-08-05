import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { IHashProvider } from '../../../utils/interfaceHash';
import { ICreateUser, IUsersRepository } from '../interface';

@injectable()
class CreateUsersService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async create({ name, email, password }: ICreateUser) {
    const usersExists = await this.usersRepository.findByEmail(email);

    if (usersExists) {
      throw new AppError('There is already one user with this email', 409);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const createUser = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return createUser;
  }
}

export { CreateUsersService };
