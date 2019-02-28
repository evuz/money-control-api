import { Post, Controller, Body, HttpException, HttpStatus } from '@nestjs/common';
import { TelegramBotUserWithoutId, TelegramBotUser } from 'money-control-domain';

import { domain } from '../domain';
import { UserRol } from 'money-control-domain/build/users/Entities/types';
import { ILoginUserByUsername } from 'money-control-domain/build/users/Repositories/UsersRepository';

@Controller('user/telegram-bot')
export class TelegramBotController {
  @Post('register')
  register(@Body() { user, password }: { user: TelegramBotUserWithoutId; password: string }): Promise<TelegramBotUser> {
    return domain.get({ useCase: 'register_telegram_bot_user' }).execute({
      password,
      user: {
        ...user,
        rol: UserRol.Bot,
      },
    });
  }

  @Post('login')
  login(@Body() params: ILoginUserByUsername) {
    return domain.get({ useCase: 'login_telegram_bot' }).execute(params);
  }
}
