import { Module } from '@nestjs/common';

import { ActivityModule } from './activity/activity.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ActivityModule, UserModule],
})
export class AppModule {}
