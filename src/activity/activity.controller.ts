import { Get, Controller, Param, Delete } from '@nestjs/common';
import { domain } from '../domain';
import { Activity } from 'money-control-domain';

@Controller('activity/:id')
export class ActivityController {
  @Get()
  async getActivity(@Param() { id }): Promise<Activity> {
    return await domain.get({ useCase: 'get_activity' }).execute({ id });
  }

  @Delete()
  async deleteActivity(@Param() { id }) {
    return domain.get({ useCase: 'remove_activity' }).execute({ id });
  }
}
