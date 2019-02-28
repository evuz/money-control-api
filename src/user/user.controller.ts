import { Post, Controller, Body } from '@nestjs/common';
import { User, UserWithoutId } from 'money-control-domain';

import { domain } from '../domain';
import { UserRol } from 'money-control-domain/build/users/Entities/types';
import { ILoginUserByEmail, ILoginUserByUsername } from 'money-control-domain/build/users/Repositories/UsersRepository';

@Controller('user')
export class UserController {
  @Post('register')
  register(@Body() { user, password }: { user: UserWithoutId; password: string }): Promise<User> {
    return domain.get({ useCase: 'register_user' }).execute({
      password,
      user: {
        ...user,
        rol: UserRol.User,
      },
    });
  }

  @Post('login')
  login(@Body() params: ILoginUserByEmail | ILoginUserByUsername) {
    return domain.get({ useCase: 'login_user' }).execute(params);
  }
}
