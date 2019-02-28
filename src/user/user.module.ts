import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { TelegramUserController } from './telegram-user.controller';
import { TelegramBotController } from './telegram-bot.controller';

@Module({
  controllers: [UserController, TelegramUserController, TelegramBotController],
})
export class UserModule {}
