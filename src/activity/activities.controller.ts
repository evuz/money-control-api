import { Get, Controller, Param, Query } from '@nestjs/common';
import { Activity } from 'money-control-domain';

import { domain } from '../domain';

@Controller('activities/:user/:date')
export class ActivitiesController {
  @Get()
  async getActivities(
    @Param() { user, date },
    @Query() { take, page },
  ): Promise<{
    results: Activity[];
    total: number;
  }> {
    const useCase = take ? 'get_activities_by_month_paginated' : 'get_activities_by_month';
    return domain.get({ useCase }).execute({ user, date: +date, take: +take, page: +page });
  }
}
