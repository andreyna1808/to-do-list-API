import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../repositories/fake';
import { DeleteUsersService } from '../deleteUserService';

let fakeUsersRepository: FakeUserRepository;
let deleteUser: DeleteUsersService;

describe('updateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    deleteUser = new DeleteUsersService(fakeUsersRepository);
  });

  it('Should be able to remove a new user', async () => {
    await deleteUser.delete('983a0c77-cbfa-453a-aae6-92baff12f89c');

    expect(undefined);
  });

  it('Should not be able to remove twice', async () => {
    await deleteUser.delete('983a0c77-cbfa-453a-aae6-92baff12f89c');

    expect(
      deleteUser.delete('983a0c77-cbfa-453a-aae6-92baff12f89c'),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('User not found', () => {
    const removeCustom = deleteUser.delete(
      '083a0c77-cbfa-453a-aae6-92baff12f89a',
    );

    expect(removeCustom).rejects.toBeInstanceOf(AppError);
  });
});
