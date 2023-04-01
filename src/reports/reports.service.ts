import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateReportDto } from "./dto/create.report.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Report } from "./reports.modele";

@Injectable()
export class ReportsService {

  constructor(@InjectModel(Report) private  reportRepository: typeof Report) {}
 async createReport(dto: CreateReportDto) {
    const report = await this.reportRepository.create(dto);
    const  user = await this.reportRepository.findByPk(dto.userId)
   if(user && report){
     await user.$add('report', report.id)
     return dto
   }
    if (!report) {
      throw new HttpException('Показания не была создана, попробуйте заново' , HttpStatus.BAD_REQUEST)
    }
    return report
  }

  async  getReportByUser(userId: number) {
    const reports = await this.reportRepository.findByPk(userId)

    if(!reports){
      throw  new HttpException('Показания не найдены', HttpStatus.NOT_FOUND)
    }

    return reports
  }

 async getAll() {
    const reports = await this.reportRepository.findAll()
   if(!reports) {
     throw  new HttpException('Показаний нет', HttpStatus.NOT_FOUND)
   }
   return reports
  }
}
