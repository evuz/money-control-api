import { Module } from '@nestjs/common';

import { ActivityController } from './activity.controller';
import { ActivitiesController } from './activities.controller';

@Module({
  controllers: [ActivityController, ActivitiesController],
})
export class ActivityModule {}
