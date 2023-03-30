import { Injectable } from '@nestjs/common';
import { UserDetailsDto } from './dto/user-details.dto';
import { UserDetails } from './user-details.model';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '../users/user.model';

@Injectable()
export class UserDetailsService {

    constructor(@InjectModel(UserDetails) private userDetailsRepository: typeof UserDetails,
    private userService: UsersService) {

    }

    async addUserDetails(dto: UserDetailsDto): Promise<UserDetails>{
        const userDetails = await this.userDetailsRepository.create(dto)
        const user = await this.userService.getUserByEmail(dto.email)
        await user.$set('userDetails', [userDetails.id])
        user.userDetails = [userDetails]

        if(!userDetails){
            throw new HttpException('Произошла ошибка! Данные пользователя не сохранены!', HttpStatus.BAD_REQUEST)
        } 

        return userDetails 
    }

    async updateUserDetails(dto: UserDetailsDto) {
        const user = await this.userDetailsRepository.findByPk(dto.user_id)

        if(!user){
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST)
        }
        

        return userDetails
    }
}
