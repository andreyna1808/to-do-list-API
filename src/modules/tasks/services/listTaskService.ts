import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../utils/appError';
import { IUsersRepository } from '../../users/interface';
import { ISearchParams, ITaskRepository } from '../interface';

@injectable()
class ListTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('UserRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async list({ page, limit }: ISearchParams, id: string) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const listByUserId = await this.usersRepository.findById(id);

    const listTasks = await this.taskRepository.findAll({
      page,
      skip,
      take,
    });

    const result = listTasks.data.filter(
      dados => dados.task_id === listByUserId.id,
    );

    return { ...listTasks, data: result, total: result.length };
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
