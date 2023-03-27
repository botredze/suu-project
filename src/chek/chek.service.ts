import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Check } from "./chek.model";
import { CreateCheckDto } from "./dto/сreateCheckDto";
import { UsersService } from "../users/users.service";

@Injectable()
export class ChekService {
  constructor(@InjectModel(Check)
              private checkRepository: typeof Check,
              private userService: UsersService) {}
 async create(dto: CreateCheckDto) {
    const check = await this.checkRepository.create(dto)

   return check
  }

  async getCheck(): Promise<Check>  {
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

  async getCheckByUser (email: string) {
    const user = await this.userService.getUserByEmail(email)
    if(!user) {
      throw  new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)
    }

  }

  async  addUserToCheck (email: string) {
    const user = await this.userService.getUserByEmail(email)
    const  check = await this.getCheck()
    await user.$set('check', [check.id]);

    user.check = check

  }
}
