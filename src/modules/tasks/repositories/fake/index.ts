/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from 'uuid';

import TaskEntitie from '../../../../infra/entities/taskEntitie';
import { ICreateTask, ITaskRepository } from '../../interface';

class FakeTaskRepository implements ITaskRepository {
  private ormRepository: TaskEntitie[] = [
    {
      id: '987a0c77-cbfa-453a-aae6-92baff12f89z',
      title: 'Helo World',
      completed: false,
      task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
      created_at: new Date(),
      updated_at: new Date(),
      users: null,
    },
    {
      id: '123a0c77-cbfa-453a-aae6-92baff12f89a',
      title: 'Task 2',
      completed: false,
      task_id: '983a0c77-cbfa-453a-aae6-92baff12f89c',
      created_at: new Date(),
      updated_at: new Date(),
      users: null,
    },
  ];

  async create({ title, task_id }: ICreateTask) {
    const task = new TaskEntitie();

    task.id = uuidv4();
    task.title = title;
    task.task_id = task_id;

    this.ormRepository.push(task);

    return task;
  }

  async save(task) {
    Object.assign(this.ormRepository, task);

    return task;
  }

  async remove(task: TaskEntitie) {}

  public async findAll() {
    return undefined;
  }

  async find() {
    return undefined;
  }

  async findByTitle(title: string) {
    const task = await this.ormRepository.find(task => task.title === title);
    return task;
  }

  async findById(id: string) {
    const task = await this.ormRepository.find(task => task.id === id);
    return task;
  }
  async findByUserId(task_id: string) {
    const task = await this.ormRepository.find(
      task => task.task_id === task_id,
    );
    return task;
  }
}

export default FakeTaskRepository;
