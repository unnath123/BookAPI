import { Module } from '@nestjs/common';
// import { BookModule } from './book/book.module';
// import { UserModule } from './users/user.module';
// import { AuthModule } from './auth/auth.module';
import { PlayerModule } from './JWTPRACT/player.module';
import { authenticateModule } from './JWTPRACT/authenticate/authenticate.module';
import { appController } from './app.controller';

@Module({
  imports: [PlayerModule, authenticateModule],
  controllers: [appController],
  providers: [],
})
export class AppModule {}
