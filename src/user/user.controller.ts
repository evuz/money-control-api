import { Get, Controller, Param, HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'money-control-domain';

import { domain } from '../domain';

@Controller('user')
export class UserController {
  @Get('telegram/:id')
  getActivity(@Param() { id }): Promise<User> {
    return domain
      .get({ useCase: 'get_user_by_telegram_id' })
      .execute({ telegramId: id })
      .catch(() => {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
      });
  }
}
