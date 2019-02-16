import { Domain } from 'ts-domain';
import {
  DatabaseUseCaseFactory,
  UsersUseCaseFactory,
  ActivityUseCaseFactory,
  repositorySelector,
} from 'money-control-domain';

const config = {};

repositorySelector.select({ repository: 'mongo' });
const useCases = {
  start_database: DatabaseUseCaseFactory.startDatabaseUseCase({ config }),
  get_activity: ActivityUseCaseFactory.getActivityUseCase({ config }),
  get_activities_by_month: ActivityUseCaseFactory.getActivitiesByMonthUseCase({ config }),
  get_activities_by_month_paginated: ActivityUseCaseFactory.getActivitiesByMonthPaginatedUseCase({ config }),
  remove_activity: ActivityUseCaseFactory.removeActivityUseCase({ config }),
  new_income: ActivityUseCaseFactory.newIncomeUseCase({ config }),
  new_expense: ActivityUseCaseFactory.newExpenseUseCase({ config }),
  get_user_by_telegram_id: UsersUseCaseFactory.getUserByTelegramIdUseCase({ config }),
};

export const domain = new Domain({ useCases, config });
