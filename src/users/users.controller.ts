import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger"
import {User} from "./user.model";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add.role.dto";
import {BanUserDto} from "./dto/ban.user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'Создания пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() userDto: CreateUserDto ){
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: 'Массив пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("ADMIN")
    getAll() {
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200})
    @Post('/role')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("ADMIN")
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto)
    }

    @ApiOperation({summary: 'Заблокировать пользователя'})
    @ApiResponse({status: 200, })
    @Post('/ban')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("ADMIN")
    ban(@Body() dto: BanUserDto) {
        return this.userService.ban(dto)
    }
}
