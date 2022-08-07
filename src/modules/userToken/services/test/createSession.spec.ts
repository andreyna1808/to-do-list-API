import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../../users/repositories/fake';
import FakeHashProvider from '../../../users/repositories/fake/fakeHash';
import { CreateSessionService } from '../createSessionToken';

let fakeUsersRepository: FakeUserRepository;
let createSession: CreateSessionService;
let fakeHashProvider: FakeHashProvider;

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    createSession = new CreateSessionService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Andreyna Carvalho',
      email: 'dricaSucess@gmail.com',
      password: '12345678',
    });

    const response = await createSession.createSession({
      email: 'dricaSucess@gmail.com',
      password: '12345678',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with no existent user', async () => {
    expect(
      createSession.createSession({
        email: 'teste@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      name: 'Andreyna Carvalho',
      email: 'dricaSucess@gmail.com',
      password: '12345678',
    });

    expect(
      createSession.createSession({
        email: 'dricaSucess@gmail.com',
        password: '567890',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
