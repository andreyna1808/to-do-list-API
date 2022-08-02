export interface ICreateSession {
  email: string;
  password: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserAuthenticated {
  user: IUser;
  token: string;
}

export interface IUserToken {
  id: string;
  token: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
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

export interface IUsersRepository {
  findAll({ page, skip, take }: SearchParams);
  findByName(name: string);
  findById(id: string);
  findByEmail(email: string);
  create(data: ICreateUser);
  save(user: IUser);
  remove(user: IUser);
}
