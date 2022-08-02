import { container } from 'tsyringe';

import BcryptHashProvider from '../config/bcryptHash';
import { ITaskRepository } from '../modules/tasks/interface';
import TaskRepository from '../modules/tasks/repositories';
import { IUsersRepository } from '../modules/users/interface';
import UserRepository from '../modules/users/repositories';
import { IUserTokensRepository } from '../modules/userToken/interface';
import TokenRepository from '../modules/userToken/repositories';
import { IHashProvider } from '../utils/interfaceHash';

container.registerSingleton<IUsersRepository>('UserRepository', UserRepository);

container.registerSingleton<IUserTokensRepository>(
  'UserTokenRepository',
  TokenRepository,
);

container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
