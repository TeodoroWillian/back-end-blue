import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module'
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GameModule, UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
