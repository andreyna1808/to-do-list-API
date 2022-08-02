/* eslint-disable import/no-extraneous-dependencies */
import { getRepository, Repository } from 'typeorm';

import TaskEntitie from '../../../infra/entities/taskEntitie';
import { ITaskRepository } from '../interface';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

class TaskRepository implements ITaskRepository {
  private ormRepository: Repository<TaskEntitie>;

  constructor() {
    this.ormRepository = getRepository(TaskEntitie);
  }

  async create(name: string, id: string) {
    const task = this.ormRepository.create({ id, name });
    await this.ormRepository.save(task);
    return task;
  }

  async save(task) {
    await this.ormRepository.save(task);
    return task;
  }

  async remove(task) {
    await this.ormRepository.remove(task);
  }

  async findAll({ page, skip, take }: SearchParams) {
    const [tasks, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: tasks,
    };

    return result;
  }

  async findByName(name: string) {
    const task = await this.ormRepository.findOne({
      name,
    });
    return task;
  }

  async findById(id: string) {
    const task = await this.ormRepository.findOne({
      id,
    });
    return task;
  }
}

export default TaskRepository;
