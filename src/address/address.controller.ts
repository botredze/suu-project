import { Controller, Get, Post } from "@nestjs/common";
import { AddressService } from "./address.service";
import { CreateAddressDto } from "./dto/create.address.dto";

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  getAll() {
    return this.addressService.getAllAddress()
  }

  @Post()
  addNewAddress(dto: CreateAddressDto, email: string ) {
    return this.addressService.createAddress(dto, email)
  }

}
