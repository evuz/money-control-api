import { Domain } from 'ts-domain';
import {
  DatabaseUseCaseFactory,
  UsersUseCaseFactory,
  ActivityUseCaseFactory,
  repositorySelector,
} from 'money-control-domain';

repositorySelector.select({ repository: 'mongo' });
const config = {};
const useCases = {
  start_database: DatabaseUseCaseFactory.startDatabaseUseCase({ config }),

  get_activity: ActivityUseCaseFactory.getActivityUseCase({ config }),
  get_activities_by_month: ActivityUseCaseFactory.getActivitiesByMonthUseCase({ config }),
  get_activities_by_month_paginated: ActivityUseCaseFactory.getActivitiesByMonthPaginatedUseCase({ config }),
  remove_activity: ActivityUseCaseFactory.removeActivityUseCase({ config }),
  new_income: ActivityUseCaseFactory.newIncomeUseCase({ config }),
  new_expense: ActivityUseCaseFactory.newExpenseUseCase({ config }),

  register_telegram_user: UsersUseCaseFactory.newTelegramUserUseCase({ config }),
  register_telegram_bot_user: UsersUseCaseFactory.newTelegramBotUserUseCase({ config }),
  register_user: UsersUseCaseFactory.newUserUseCase({ config }),
  get_telegram_user_by_telegram_id: UsersUseCaseFactory.getTelegramUserByTelegramIdUseCase({ config }),
  get_telegram_user: UsersUseCaseFactory.getTelegramUserUseCase({ config }),
  login_user: UsersUseCaseFactory.loginUserUseCase({ config }),
  login_telegram_bot: UsersUseCaseFactory.loginTelegramBotUserUseCase({ config }),
};

export const domain = new Domain({ useCases, config });
