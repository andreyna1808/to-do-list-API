export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  task_id: string;
  created_at: Date;
  updated_at: Date;
}
export interface IUpdateTask {
  id: string;
  task_id: string;
  title: string;
  completed: boolean;
}

export interface ISearchParams {
  page: number;
  limit: number;
}

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface ICreateTask {
  title: string;
  task_id: string;
}

export interface ITaskRepository {
  find();
  findAll({ page, skip, take }: SearchParams);
  findByTitle(title: string);
  findById(id: string);
  create(title: ICreateTask);
  save(task: ITask);
  remove(task: ITask);
}
