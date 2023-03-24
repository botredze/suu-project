import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/user.model";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user.roles";
import { Post } from "../posts/post.model";
import { Report } from "./reports.modele";
import { Check } from "../chek/chek.model";

@Module({
  providers: [ReportsService],
  controllers: [ReportsController],
  imports: [
  SequelizeModule.forFeature([User, Roles, UserRoles, Post, Report, Check])],
  exports: [
    ReportsService
  ]
})
export class ReportsModule {}
