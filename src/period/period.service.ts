import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePeriodDto } from "./dto/period.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Period } from "./period.model";

@Injectable()
export class PeriodService {

  constructor(@InjectModel(Period) private periodRepository: typeof  Period) {
  }

  async addNewPeriod(dto: CreatePeriodDto) {
    const period = await this.periodRepository.create(dto)

    if(!period) {
      throw  new HttpException('Период не был добавлен в базу', HttpStatus.BAD_REQUEST)
    }
    return period
  }

  async  getPeriod(dto: Period){
    const period = await this.periodRepository.findAndCountAll({})

    if(!period){
      throw  new HttpException('Данный период не найден', HttpStatus.NOT_FOUND)
    }

    return period
  }

  async  getPeriodAllTime() {
    const periods = await this.periodRepository.findAll()

    if(!periods){
      throw  new HttpException('Данный период не найден', HttpStatus.NOT_FOUND)
    }

    return periods
  }

  // async updatePeriod(dto: CreatePeriodDto) {
  //
  // }
}
