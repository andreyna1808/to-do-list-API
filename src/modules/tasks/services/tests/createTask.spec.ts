import 'reflect-metadata';
import { AppError } from '../../../../utils/appError';
import FakeTaskRepository from '../../repositories/fake';
import { CreateTaskService } from '../createTaskService';

let fakeTaskRepository: FakeTaskRepository;
let createTask: CreateTaskService;

describe('CreateTask', () => {
  beforeEach(() => {
    fakeTaskRepository = new FakeTaskRepository();

    createTask = new CreateTaskService(fakeTaskRepository);
  });

  it('Should be able to create a new task', async () => {
    const task = await createTask.create({
      title: 'Andreyna Carvalho',
      task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
    });

    expect(task).toHaveProperty('id');
  });

  it('Should not be able to create two tasks with the same title', async () => {
    createTask.create({
      title: 'Task 2',
      task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
    });

    expect(
      createTask.create({
        title: 'Task 2',
        task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
