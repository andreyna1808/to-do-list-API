/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ITaskRepository, IUpdateTask } from '../interface';

@injectable()
class UpdateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async update({ task_id, id, title, completed }: IUpdateTask) {
    const taskExists = await this.taskRepository.findByTitle(title);
    const updateTask = await this.taskRepository.findById(id);

    if (!updateTask) {
      throw new AppError('Task not found', 404);
    }

    if (taskExists && title !== updateTask.title) {
      throw new AppError('There is already one product with this name', 409);
    }

    updateTask.title = title;
    updateTask.completed = completed;

    await this.taskRepository.save(updateTask);

    return updateTask;
  }
}
export { UpdateTaskService };
