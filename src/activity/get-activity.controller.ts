import { Get, Controller, Param } from '@nestjs/common';
import { domain } from '../domain';

@Controller('activity/:id')
export class GetActivityController {
  @Get()
  async getActivity(@Param() { id }): Promise<string> {
    const activity = await domain.get({ useCase: 'get_activity' }).execute({ id });
    return `Activity ${activity.concept}`;
  }
}
