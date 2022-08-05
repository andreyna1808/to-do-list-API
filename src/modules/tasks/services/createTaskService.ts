import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ICreateTask, ITaskRepository } from '../interface';

@injectable()
class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  public async create({ task_id, title }: ICreateTask) {
    const taskExists = await this.taskRepository.findByTitle(title);
    const userId = await this.taskRepository.findById(task_id);

    console.log('uSER IDDD EXISTES', userId);

    if (userId) {
      throw new AppError('User not found', 404);
    }

    if (taskExists) {
      throw new AppError('There is already one task with this title', 409);
    }

    const createTask = await this.taskRepository.create({ title, task_id });

    return { createTask };
  }
}
export { CreateTaskService };
