import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ICreateTask, ITaskRepository } from '../interface';

@injectable()
class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  public async create({ id, name }: ICreateTask) {
    const taskExists = await this.taskRepository.findByName(name);

    if (taskExists) {
      throw new AppError('There is already one task with this name');
    }

    const product = await this.taskRepository.create({
      id,
      name,
    });

    return product;
  }
}
export { CreateTaskService };
