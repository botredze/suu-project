import { Column, DataType, Table, Model, BelongsToMany, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger"
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user.roles";
import {Post} from "../posts/post.model";
import { Report } from "../reports/reports.modele";
import { Check } from "../chek/chek.model";
import { Address } from "../address/address.model";
import { UserDetails } from '../user-details/user-details.model';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true

    })
    @ApiProperty({example: '1',description: 'Уникальный идентификатор пользователя' })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    @ApiProperty({example: 'user@gmail.com',description: 'Адрес электронный почты' })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty({example: 'pass123',description: 'Пароль для защиты учетных данных' })
    password: string;

    @Column({
        type: DataType.BOOLEAN
    })
    @ApiProperty({example: 'true',description: 'Заблокирован ли' })
    banned: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    @ApiProperty({example: 'За дачу не правильных данных',description: 'За что был заблокирован' })
    banReason: string;


    @BelongsToMany(() => Roles, ()=> UserRoles)
    roles: Roles[];

    @HasMany(() => Post)
    posts: Post

    @HasMany(()=> Report)
    report: Report[]

    @HasMany(()=> Check)
    check: Check

    @HasOne(() => UserDetails)
    userDetails: UserDetails[]
}