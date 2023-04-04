import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateBillingDto, UpdateBillingDto } from "./dto/billing.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Billing, WaterType } from "./billing.model";

@Injectable()
export class BillingService {
  constructor(@InjectModel(Billing) private billingService:  typeof Billing ) {
  }

  async addNewBilling(dto: CreateBillingDto){
    const billing = await this.billingService.create(dto)

    if(!billing){
      throw  new HttpException('Тарификация не была создана', HttpStatus.BAD_REQUEST)
    }

    return billing
  }

  async updateBilling(dto: UpdateBillingDto){
    const id = dto.billingId
    const billing  = await this.billingService.findOne({where:{ id}, include: {all:true}})

    if(!billing){
      throw  new HttpException('Тариф не найден', HttpStatus.NOT_FOUND)
    }

    const updatedBilling = await this.billingService.update({
      water_type: WaterType.COOL,
      price: dto.price
    }, {where: {id}})

    if(updatedBilling) {
      throw  new HttpException('Тариф не был обновлен', HttpStatus.BAD_REQUEST)
    }
    return updatedBilling
  }

  async deleteBilling() {
    return null
  }

  async updateBillingDto() {
    return null
  }
}
