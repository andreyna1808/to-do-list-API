import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ITaskRepository } from '../interface';

@injectable()
class DeleteTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async delete(id: string, task_id: string) {
    const removeTask = await this.taskRepository.findById(id);
    const verifyUser = await this.taskRepository.findById(task_id);

    if (!verifyUser) {
      throw new AppError('User not found', 404);
    }
    if (!removeTask) {
      throw new AppError('Task not found', 404);
    }

    await this.taskRepository.remove(removeTask);
  }
}
export { DeleteTaskService };
