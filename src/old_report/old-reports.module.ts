import { Module } from '@nestjs/common';
import { OldReportService } from "./old-report.service";
import { OldReportController } from "./old-report.controller";

@Module({
  providers: [OldReportService],
  controllers: [OldReportController]
})
export class OldReportsModule {}
