import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FamiliarService } from './familiar.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FamiliarService],
})
export class AppModule {}
