import { Module } from '@nestjs/common';
import { ChekService } from './chek.service';
import { ChekController } from './chek.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/user.model";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user.roles";
import { Report } from "../reports/reports.modele";
import { Check } from "./chek.model";
import { UsersService } from "../users/users.service";

@Module({
  providers: [ChekService],
  controllers: [ChekController],
  imports: [
    SequelizeModule.forFeature([User, Roles, UserRoles, Report, Check])
  ],
  exports: [
    ChekService,]
})
export class ChekModule {}
