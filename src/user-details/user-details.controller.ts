import { Controller } from '@nestjs/common';
import { UserDetailsDto } from './dto/user-details.dto';
import { UserDetailsService } from './user-details.service';
import { UserDetails } from './user-details.model';

@Controller('user-details')
export class UserDetailsController {
    constructor( private readonly userDetailsService: UserDetailsService,){} 

    addUserDetails (dto: UserDetailsDto): Promise<UserDetails>{ 
        return this.userDetailsService.addUserDetails(dto)
    }

    updateUserDetails (dto: UserDetailsDto)  {
        return this.userDetailsService.updateUserDetails(dto)
    }


}
