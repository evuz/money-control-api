import { Get, Controller, Param, HttpException, HttpStatus, Post, Body, Query } from '@nestjs/common';
import { TelegramUser, TelegramUserWithoutId } from 'money-control-domain';

import { domain } from '../domain';
import { UserRol } from 'money-control-domain/build/users/Entities/types';

@Controller('user/telegram')
export class TelegramUserController {
  @Get(':id')
  getUser(@Param() { id }, @Query() { telegramId }): Promise<TelegramUser> {
    return this.requestUserToDomain({ id, isTelegramId: telegramId === 'true' }).catch(() => {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    });
  }

  @Post('register')
  register(@Body() { user }: { user: TelegramUserWithoutId }): Promise<TelegramUser> {
    return domain.get({ useCase: 'register_telegram_user' }).execute({
      user: {
        ...user,
        rol: UserRol.User,
      },
    });
  }

  private requestUserToDomain({ id, isTelegramId }) {
    if (isTelegramId) {
      return domain.get({ useCase: 'get_telegram_user_by_telegram_id' }).execute({ telegramId: id });
    }
    return domain.get({ useCase: 'get_telegram_user' }).execute({ id });
  }
}
