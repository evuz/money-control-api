import { Get, Controller, Param, Query } from '@nestjs/common';
import { Activity } from 'money-control-domain';

import { domain } from '../domain';

@Controller('activities/:userId/:date')
export class ActivitiesController {
  @Get()
  async getActivity(@Param() { userId, date }, @Query() { take, page }): Promise<Activity[]> {
    const useCase = take ? 'get_activities_by_month_paginated' : 'get_activities_by_month';
    const activities = await domain
      .get({ useCase })
      .execute({ userId: +userId, date: +date, take: +take, page: +page });
    return activities.results;
  }
}
