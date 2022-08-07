import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../repositories/fake';
import { DeleteTaskService } from '../deleteTaskService';

let fakeTaskRepository: FakeUserRepository;
let deleteTask: DeleteTaskService;

describe('Remove Task', () => {
  beforeEach(() => {
    fakeTaskRepository = new FakeUserRepository();
    deleteTask = new DeleteTaskService(fakeTaskRepository);
  });

  it('Should be able to remove a new task', async () => {
    await deleteTask.delete(
      '123a0c77-cbfa-453a-aae6-92baff12f89a',
      '983a0c77-cbfa-453a-aae6-92baff12f89c',
    );

    expect(undefined);
  });

  it('Should not be able to remove twice', async () => {
    await deleteTask.delete(
      '123a0c77-cbfa-453a-aae6-92baff12f89a',
      '123a0c77-cbfa-453a-aae6-92baff12f89a',
    );

    expect(
      deleteTask.delete(
        '983a0c77-cbfa-453a-aae6-92baff12f89c',
        '983a0c77-cbfa-453a-aae6-92baff12f89c',
      ),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('Task not found', () => {
    const removeCustom = deleteTask.delete(
      '123a0c77-cbfa-453a-aae6-92baff12f89m',
      '983a0c77-cbfa-453a-aae6-92baff12f89n',
    );

    expect(removeCustom).rejects.toBeInstanceOf(AppError);
  });
});
