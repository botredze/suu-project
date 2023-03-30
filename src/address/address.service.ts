import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateAddressDto } from "./dto/create.address.dto";
import { Address } from "./address.model";
import { UsersService } from "../users/users.service";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class AddressService {

  constructor(@InjectModel(Address) private addressRepository: typeof Address,
     private userService: UsersService) {
  }
 async getAllAddress() {
    const  address = await this.addressRepository.findAll()
   if(!address) {
     throw  new HttpException('Адреса не найдены', HttpStatus.NOT_FOUND)
   }
   return address
  }

 async createAddress(dto: CreateAddressDto, email: string) {
    const user  = await this.userService.getUserByEmail(email)
   const address = await this.addressRepository.create(dto)
   await user.$set('address', [address.id])
   user.address = [address]
   return address

  }
}
