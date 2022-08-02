export interface ITask {
  id: string;
  name: string;
  completed: string;
  task_id: string;
  created_at: Date;
  updated_at: Date;
}

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface ITaskRepository {
  findAll({ page, skip, take }: SearchParams);
  findByName(name: string);
  findById(id: string);
  create(name: string);
  save(task: ITask);
  remove(task: ITask);
}
