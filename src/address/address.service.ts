import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateAddressDto, UptdateAddressDto } from "./dto/create.address.dto";
import { Address } from "./address.model";
import { UsersService } from "../users/users.service";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class AddressService {

  constructor(@InjectModel(Address) private addressRepository: typeof Address) {
  }
 async getAllAddress() {
    const  address = await this.addressRepository.findAll()
   if(!address) {
     throw  new HttpException('Адреса не найдены', HttpStatus.NOT_FOUND)
   }
   return address
  }

 async createAddress(dto: CreateAddressDto) {
    const userDetails  = await this.addressRepository.findByPk(dto.user_details_id)
    const address = await this.addressRepository.create(dto)

    if(!userDetails){
      throw new HttpException('Данные пользователя не найдены', HttpStatus.NOT_FOUND)
    } 

    if(userDetails && address){
      userDetails.$add('userDetails', [address.id])
      return dto
    } 

    throw new HttpException('Адресс не был добавлен', HttpStatus.BAD_REQUEST)

  }

  async updateAddress(dto: UptdateAddressDto) {
    const id = dto.address_id
    const userDetails = await this.addressRepository.findByPk(dto.user_details_id)
    const address = await this.addressRepository.findOne({where: {id}})

    if(!userDetails && !address) {
      throw new HttpException ('Данные не найдены', HttpStatus.NOT_FOUND)

    }

    userDetails.street = dto.street;
    userDetails.home_number = dto.home_number;
    userDetails.region = dto.region;
    userDetails.area = dto.area;
    userDetails.city = dto.city;

    await userDetails.save();

    return userDetails;
  }
}
