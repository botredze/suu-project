import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDetailsDto } from "./dto/user-details.dto";
import { UserDetails, UserType } from "./user-details.model";
import { InjectModel } from "@nestjs/sequelize";
import { Address } from "src/address/address.model";
import { AddressService } from "src/address/address.service";

@Injectable()
export class UserDetailsService {

    constructor(@InjectModel(UserDetails) private userDetailsRepository: typeof UserDetails,) {}

    async addUserDetails(dto: UserDetailsDto){
        const user = await this.userDetailsRepository.findByPk(dto.userId)
        const userDetails = await this.userDetailsRepository.create(dto)

        if(this.getProfileCompletion) {
            await user.$set('user', [userDetails.id])
            user.user.userDetails = [userDetails]
        }

        if(!userDetails){
            throw new HttpException('Произошла ошибка! Данные пользователя не сохранены!', HttpStatus.BAD_REQUEST)
        }

        return userDetails
    }

    async updateUserDetails(dto: UserDetailsDto) {
        const user = await this.userDetailsRepository.findByPk(dto.userId)
        const userDetails = await this.userDetailsRepository.create(dto)
        if(!user){
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST)
        }

        if(this.getProfileCompletion) {
            user.user_type = UserType.ENTITY;
            user.first_name = dto.firs_name;
            user.last_name = dto.last_name;
            user.birth_date = dto.birth_date;
            //user.persenal_number = dt
            user.phone_number = dto.phone_number;
            user.wa_phone_number = dto.wa_phone_number;

            await user.save()
        }
        return user
    }

    async getProfileCompletion(dto: UserDetails) {
        const {first_name, last_name, birth_date, phone_number, wa_phone_number } = dto

        if(!first_name &&  !last_name && !birth_date && !phone_number && !wa_phone_number) {
            throw  new HttpException('Не все поля заполнены', HttpStatus.BAD_REQUEST)
        } else  return true
    }
}

