import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ITaskRepository } from '../interface';

interface ITest {
  title: string;
  task_id: string;
}

@injectable()
class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  public async create({ task_id, title }: ITest) {
    const taskExists = await this.taskRepository.findByTitle(title);
    const userId = await this.taskRepository.findById(task_id);

    if (userId) {
      throw new AppError('There is already one task with this title', 409);
    }

    if (taskExists) {
      throw new AppError('There is already one task with this title', 409);
    }

    const createTask = await this.taskRepository.create({ title, task_id });

    return { createTask };
  }
}
export { CreateTaskService };
