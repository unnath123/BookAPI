import { Module } from '@nestjs/common';
import { passportLocalStrategy } from './passport.local.strategy';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [passportLocalStrategy],
})
export class AuthModule {}
