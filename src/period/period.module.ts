import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/user.model";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user.roles";
import { Post } from "../posts/post.model";
import { Report } from "../reports/reports.modele";
import { UserDetails } from "../user-details/user-details.model";
import { Check } from "../chek/chek.model";
import { Address } from "../address/address.model";
import { Period } from "./period.model";

@Module({
  providers: [PeriodService],
  controllers: [PeriodController],
  imports: [
    SequelizeModule.forFeature([User, Roles, UserRoles, Post, Report, UserDetails, Check, Address, Period]),
  ],
  exports: [PeriodService]
})
export class PeriodModule {}
