import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { UserDetailsController } from './user-details.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/user.model";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user.roles";
import { Post } from "../posts/post.model";
import { Report } from "../reports/reports.modele";
import { UserDetails } from "./user-details.model";
import { Check } from "../chek/chek.model";
import { Address } from "../address/address.model";
import { Period } from "../period/period.model";
import { AddressService } from "../address/address.service";

@Module({
  providers: [UserDetailsService],
  controllers: [UserDetailsController],
  imports: [
  SequelizeModule.forFeature([User, Roles, UserRoles, Post, Report, UserDetails, Check, Address, Period]),
],

  exports: [UserDetailsService]
})
export class UserDetailsModule {}
