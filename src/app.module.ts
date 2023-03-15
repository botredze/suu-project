import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
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
import * as path from "path";

@Module({
    controllers: [],
    providers: [],
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
            models: [User, Roles, UserRoles, Post],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]
})
export class AppModule //implements NestModule
 {
    // configure(consumer: MiddlewareConsumer){
    //     consumer.apply(PreauthMiddleware).forRoutes(
    //         {
    //             path: "*",
    //             method: RequestMethod.ALL
    //         })
    // }
}
