import { Module } from '@nestjs/common';
import { PlayerModule } from '../player.module';
import { localPassportStrategy } from './local.strategic';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { authService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule ,PlayerModule,

    JwtModule.register({
        secret: "this is the key",
        signOptions: { expiresIn: '6000s' },
    })
  ],
  controllers: [],
  providers: [localPassportStrategy, authService, JwtStrategy],
  exports:[authService]
})
export class authenticateModule {}
