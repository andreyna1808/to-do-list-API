/* eslint-disable import/no-extraneous-dependencies */
import { getRepository, Repository } from 'typeorm';

import UserEntitie from '../../../infra/entities/userEntitie';
import { ICreateUser, IUsersRepository } from '../interface';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

class UserRepository implements IUsersRepository {
  private ormRepository: Repository<UserEntitie>;

  constructor() {
    this.ormRepository = getRepository(UserEntitie);
  }

  async create({ name, email, password }: ICreateUser) {
    const user = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(user);

    return user;
  }

  async save(user) {
    await this.ormRepository.save(user);

    return user;
  }

  async remove(user) {
    await this.ormRepository.remove(user);
  }

  async findAll({ page, skip, take }: SearchParams) {
    const [users, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    };

    return result;
  }

  async findByName(name: string) {
    const user = await this.ormRepository.findOne({
      name,
    });

    return user;
  }

  async findById(id: string) {
    const user = await this.ormRepository.findOne({
      id,
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.ormRepository.findOne({
      email,
    });

    return user;
  }
}

export default UserRepository;
