import { Get, Controller, Param, Delete, Post, Body } from '@nestjs/common';
import { domain } from '../domain';
import { Activity, ActivityWithoutId } from 'money-control-domain';

@Controller('activity')
export class ActivityController {
  @Get(':id')
  getActivity(@Param() { id }): Promise<Activity> {
    return domain.get({ useCase: 'get_activity' }).execute({ id });
  }

  @Delete(':id')
  deleteActivity(@Param() { id }) {
    return domain.get({ useCase: 'remove_activity' }).execute({ id });
  }

  @Post('income')
  newIncome(@Body() activity: ActivityWithoutId) {
    return domain.get({ useCase: 'new_income' }).execute({ activity });
  }

  @Post('expense')
  newExpense(@Body() activity: ActivityWithoutId) {
    return domain.get({ useCase: 'new_expense' }).execute({ activity });
  }
}
