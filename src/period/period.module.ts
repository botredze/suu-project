import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';

@Module({
  providers: [PeriodService],
  controllers: [PeriodController]
})
export class PeriodModule {}
