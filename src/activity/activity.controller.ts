import { Get, Controller, Param, Delete } from '@nestjs/common';
import { domain } from '../domain';
import { Activity } from 'money-control-domain';

@Controller('activity')
export class ActivityController {
  @Get(':id')
  async getActivity(@Param() { id }): Promise<Activity> {
    return await domain.get({ useCase: 'get_activity' }).execute({ id });
  }

  @Delete(':id')
  async deleteActivity(@Param() { id }) {
    return domain.get({ useCase: 'remove_activity' }).execute({ id });
  }
}
