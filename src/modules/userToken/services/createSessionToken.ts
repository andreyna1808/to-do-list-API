// Iniciar a sessão que gere um token para o usuário ter acesso em algumas informações
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AuthConfig } from '../../../config/auth';
import { AppError } from '../../../utils/appError';
import { IHashProvider } from '../../../utils/interfaceHash';
import { IUsersRepository } from '../../users/interface';

interface IProducts {
  email: string;
  password: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async createSession({ email, password }: IProducts) {
    const user = await this.usersRepository.findByEmail(email);

    const confirmedPassword = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!user || !confirmedPassword) {
      throw new AppError('Incorrect email/password', 401);
    }

    const token = sign({}, AuthConfig.jwt, {
      subject: user.id,
      expiresIn: AuthConfig.dateExpires,
    });

    return { user, token };
  }
}

export { CreateSessionService };
