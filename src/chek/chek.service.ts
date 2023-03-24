import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCheckDto } from "./dto/сreateCheckDto";
import { InjectModel } from "@nestjs/sequelize";
import { Check } from "./chek.model";

@Injectable()
export class ChekService {
  constructor(@InjectModel(Check) private checkRepository: typeof Check) {}
 async create(dto: CreateCheckDto) {
    const check = await this.checkRepository.create(dto)

   return check
  }

  async getCheck() {
    const check  = await this.checkRepository.findOne()

    if(!check) {
      throw new HttpException('Чек не найден', HttpStatus.NOT_FOUND)
    }
    return check
  }

  async getAll() {
    const checkList = await this.checkRepository.findAll()
    if(!checkList){
      throw  new HttpException('Чеки не найдены', HttpStatus.NOT_FOUND)
    }
    return checkList
  }
}
