import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ISearchParams, IUsersRepository } from '../interface';

@injectable()
class ListUsersService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async list({ page, limit }: ISearchParams) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const listUsers = await this.usersRepository.findAll({
      page,
      skip,
      take,
    });
    return listUsers;
  }

  async listById(id: string) {
    const listUsers = await this.usersRepository.findById(id);

    if (!listUsers) {
      throw new AppError('User not found', 404);
    }

    return listUsers;
  }
}

export { ListUsersService };
