import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../repositories/fake';
import { UpdateUsesService } from '../UpdateUserService';

let fakeUsersRepository: FakeUserRepository;
let updateUser: UpdateUsesService;

describe('updateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    updateUser = new UpdateUsesService(fakeUsersRepository);
  });

  it('Should be able to update a user', async () => {
    const user = await updateUser.update({
      id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
      name: 'Drica update',
      email: 'deucertooo@gmail.com',
      password: '12345678',
    });

    expect(user).toHaveProperty('id');
  });

  it('User not found', async () => {
    const user = updateUser.update({
      id: '9264b66d-22c5-4128-bb08-48628aaea31f',
      name: 'Andreyna Carvalho',
      email: 'teste@teste.com',
      password: '12345678',
    });

    expect(user).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update two user with the same email', async () => {
    updateUser.update({
      id: '783a0c77-cbfa-453a-aae6-92baff12f89d',
      name: 'Andreyna Carvalho',
      email: 'drica123@gmail.com',
      password: '12345678',
    });

    expect(
      updateUser.update({
        id: '783a0c77-cbfa-453a-aae6-92baff12f89d',
        name: 'Andreyna Carvalho',
        email: 'drica123@gmail.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
