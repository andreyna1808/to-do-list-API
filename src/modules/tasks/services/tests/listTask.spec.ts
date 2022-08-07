import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../../users/repositories/fake';
import FakeTaskRepository from '../../repositories/fake';
import { ListTaskService } from '../listTaskService';

let fakeTaskRepository: FakeTaskRepository;
let fakeUserRepository: FakeUserRepository;
let listTask: ListTaskService;
let page: number;
let limit: number;
let id: string;

describe('List Task', () => {
  beforeEach(() => {
    fakeTaskRepository = new FakeTaskRepository();
    listTask = new ListTaskService(fakeTaskRepository, fakeUserRepository);

    page = 1;
    limit = 15;
    id = '983a0c77-cbfa-453a-aae6-92baff12f89c';
  });

  it('Should be able to list tasks', () => {
    listTask.list({ page, limit }, id);

    expect(listTask);
  });

  it('Should be able to list by Id', async () => {
    const data = await listTask.listById(
      '987a0c77-cbfa-453a-aae6-92baff12f89z',
    );

    expect(data);
  });

  it('List not found', () => {
    const listCustom = listTask.listById(
      '083a0c77-cbfa-453a-aae6-92baff12f89a',
    );

    expect(listCustom).rejects.toBeInstanceOf(AppError);
  });
});
