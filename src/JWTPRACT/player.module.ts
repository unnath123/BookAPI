import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
// import { playerController } from '../app.controller';
import { authenticateModule } from './authenticate/authenticate.module';


@Module({
  imports: [],
  controllers: [],
  providers: [PlayerService],
  exports:[PlayerService]
})
export class PlayerModule {}
