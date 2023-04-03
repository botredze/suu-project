import { Module} from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user.roles";
import {Post} from "../posts/post.model";
import { Report } from "../reports/reports.modele";
import {User} from "../users/user.model"
import { UserDetails } from 'src/user-details/user-details.model';
import { Check } from 'src/chek/chek.model';
import { Address } from './address.model';
import {Period} from '../period/period.model'

@Module({
  providers: [AddressService],
  controllers: [AddressController], 
  imports: [
  SequelizeModule.forFeature([User, Roles, UserRoles, Post, Report, UserDetails, Check, Address, Period]),
],
exports: [AddressService]
})
export class AddressModule {

}
