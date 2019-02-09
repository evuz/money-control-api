import { Module } from '@nestjs/common';

import { GetActivityController } from './get-activity.controller';

@Module({
  controllers: [GetActivityController],
})
export class ActivityModule {}
