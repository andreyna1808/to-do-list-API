import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../repositories/fake';
import FakeHashProvider from '../../repositories/fake/fakeHash';
import { CreateUsersService } from '../createUserService';

let fakeUsersRepository: FakeUserRepository;
let createUser: CreateUsersService;
let fakeHashProvider: FakeHashProvider;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.create({
      name: 'Andreyna Carvalho',
      email: 'teste@teste.com',
      password: '12345678',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create two users with the same email', async () => {
    await createUser.create({
      name: 'Andreyna Carvalho',
      email: 'teste@teste.com',
      password: '12345678',
    });

    expect(
      createUser.create({
        name: 'Andreyna Carvalho',
        email: 'teste@teste.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
