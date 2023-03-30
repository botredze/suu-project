import { Module, } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import {Roles} from "./roles/roles.model";
import {UserRoles} from "./roles/user.roles";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/post.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { ReportsModule } from './reports/reports.module';
import { ChekModule } from './chek/chek.module';
import * as path from "path";
import { Check } from "./chek/chek.model";
import { Report } from "./reports/reports.modele";
import { AddressModule } from './address/address.module';
import { UserDetailsModule } from './user-details/user-details.module';

@Module({
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),

        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),

        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [User, Roles, UserRoles, Post, Report, Check],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        ReportsModule,
        ChekModule,
        AddressModule,
        UserDetailsModule,
    ]
})
export class AppModule{}
