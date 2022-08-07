/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from 'uuid';

import UserEntitie from '../../../../infra/entities/userEntitie';
import { ICreateUser, IUsersRepository } from '../../interface';

class FakeUserRepository implements IUsersRepository {
  private ormRepository: UserEntitie[] = [
    {
      id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
      name: 'Andreyna Carvalho',
      password: '12345678',
      email: 'drica123@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '783a0c77-cbfa-453a-aae6-92baff12f89d',
      name: 'Drica',
      email: 'drica@gmail.com',
      password: '12345678',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  async create({ name, email, password }: ICreateUser) {
    const user = new UserEntitie();

    user.id = uuidv4();
    user.name = name;
    user.email = email;
    user.password = password;

    this.ormRepository.push(user);
    return user;
  }

  async save(user) {
    Object.assign(this.ormRepository, user);

    return user;
  }

  async remove(user: UserEntitie) {}

  public async findAll() {
    return undefined;
  }

  async findByName(name: string) {
    const user = this.ormRepository.find(user => user.name === name);

    return user;
  }

  async findById(id: string) {
    const user = this.ormRepository.find(user => user.id === id);

    return user;
  }

  async findByEmail(email: string) {
    const user = this.ormRepository.find(user => user.email === email);

    return user;
  }
}

export default FakeUserRepository;
