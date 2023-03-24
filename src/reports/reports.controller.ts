import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { CreateReportDto } from "./dto/create.report.dto";

@Controller('reports')
export class ReportsController {

  constructor(private reportService: ReportsService ) {}
  @Post('/report')
  createReport(@Body() dto: CreateReportDto){
    return this.reportService.createReport(dto)
  }

  @Get()
  getAllReports(){
    return this.reportService.getAll()
  }

}
