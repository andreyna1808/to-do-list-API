import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../repositories/fake';
import { ListUsersService } from '../ListUserService';

let fakeUsersRepository: FakeUserRepository;
let listUser: ListUsersService;
let page: number;
let limit: number;

describe('List User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();

    listUser = new ListUsersService(fakeUsersRepository);

    page = 1;
    limit = 15;
  });

  it('Should be able to list users', async () => {
    await listUser.list({ page, limit });

    expect(listUser);
  });

  it('Should be able to list by Id', async () => {
    const data = await listUser.listById(
      '783a0c77-cbfa-453a-aae6-92baff12f89d',
    );

    expect(data);
  });

  it('Users not found', () => {
    const listCustom = listUser.listById(
      '083a0c77-cbfa-453a-aae6-92baff12f89a',
    );

    expect(listCustom).rejects.toBeInstanceOf(AppError);
  });
});
