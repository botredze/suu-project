import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user.roles";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {Post} from "../posts/post.model";
import { Report } from "../reports/reports.modele";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Roles, UserRoles, Post, Report]),
    RolesModule,
      forwardRef(()=> AuthModule)
  ],
    exports: [UsersService, ]
})
export class UsersModule {}
