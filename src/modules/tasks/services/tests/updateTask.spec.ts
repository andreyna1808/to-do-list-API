import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeUserRepository from '../../repositories/fake';
import { UpdateTaskService } from '../updateTaskService';

let fakeTaskRepository: FakeUserRepository;
let updateTask: UpdateTaskService;

describe('updateTask', () => {
  beforeEach(() => {
    fakeTaskRepository = new FakeUserRepository();
    updateTask = new UpdateTaskService(fakeTaskRepository);
  });

  it('Should be able to update a task', async () => {
    const task = await updateTask.update({
      id: '987a0c77-cbfa-453a-aae6-92baff12f89z',
      title: 'I Work',
      completed: false,
      task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
    });

    expect(task).toHaveProperty('id');
  });

  it('Task not found', async () => {
    const task = updateTask.update({
      id: '9264b66d-22c5-4128-bb08-48628aaea31f',
      title: 'Helo World',
      completed: false,
      task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
    });

    expect(task).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update two task with the same title', async () => {
    updateTask.update({
      id: '987a0c77-cbfa-453a-aae6-92baff12f89z',
      title: 'Task 2',
      completed: false,
      task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
    });

    expect(
      updateTask.update({
        id: '987a0c77-cbfa-453a-aae6-92baff12f89z',
        title: 'Task 2',
        completed: false,
        task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
