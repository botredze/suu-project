import { Module, } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user.roles";
import {Post} from "../posts/post.model";
import { Report } from "../reports/reports.modele";
import { UserDetails } from 'src/user-details/user-details.model';
import { Check } from 'src/chek/chek.model';
import { Address } from '../address/address.model';
import {Period} from '../period/period.model'
import { Billing } from "./billing.model";

@Module({
  providers: [BillingService],
  controllers: [BillingController],
  imports: [
  SequelizeModule.forFeature([User, Roles, UserRoles, Post, Report, UserDetails, Check, Address, Period, Billing]),
  ],

  exports: [BillingService]
})
export class BillingModule {}
