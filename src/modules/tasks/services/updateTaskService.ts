import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ITaskRepository, IUpdateTask } from '../interface';

@injectable()
class UpdateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async update({ task_id, id, name, completed }: IUpdateTask) {
    const taskExists = await this.taskRepository.findByName(name);
    const updateTask = await this.taskRepository.findById(id);
    const userByTask = await this.taskRepository.findById(task_id);

    if (!userByTask) {
      throw new AppError('User not found', 404);
    }

    if (!updateTask) {
      throw new AppError('Task not found', 404);
    }

    if (taskExists && name !== updateTask.name) {
      throw new AppError('There is already one product with this name', 409);
    }

    updateTask.name = name;
    updateTask.completed = completed;

    await this.taskRepository.save(updateTask);

    return updateTask;
  }
}
export { UpdateTaskService };
