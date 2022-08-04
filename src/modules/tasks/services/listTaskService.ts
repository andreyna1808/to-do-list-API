import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { ISearchParams, ITaskRepository } from '../interface';

@injectable()
class ListTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async list({ page, limit }: ISearchParams) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const listTasks = await this.taskRepository.findAll({
      page,
      skip,
      take,
    });
    return listTasks;
  }

  async listById(id: string) {
    const listTasks = await this.taskRepository.findById(id);

    if (!listTasks) {
      throw new AppError('List not found', 404);
    }

    return listTasks;
  }
}
export { ListTaskService };
