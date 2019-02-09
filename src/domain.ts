import { Domain } from 'ts-domain';
import { DatabaseUseCaseFactory, UsersUseCaseFactory, ActivityUseCaseFactory } from 'money-control-domain';

const useCases = {
  start_database: DatabaseUseCaseFactory.startDatabaseUseCase(),
  get_activity: ActivityUseCaseFactory.getActivityUseCase(),
  get_activities_by_month: ActivityUseCaseFactory.getActivitiesByMonthUseCase(),
  get_activities_by_month_paginated: ActivityUseCaseFactory.getActivitiesByMonthPaginatedUseCase(),
  remove_activity: ActivityUseCaseFactory.removeActivityUseCase(),
};

export const domain = new Domain({ useCases });
