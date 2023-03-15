import {Column, DataType, Table, Model, BelongsToMany, HasMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger"
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user.roles";
import {Post} from "../posts/post.model";

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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty({example: 'Таалай',description: 'Имя' })
    first_name?: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty({example: 'Алиев',description: 'Фамилия' })
    last_name?: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty({example: '+996504130622',description: 'Контактный номер телефона' })
    phoneNumber?: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty({example: 'Карыпжана 47',description: 'Контактный номер телефона' })
    address?: string;


    @BelongsToMany(() => Roles, ()=> UserRoles)
    roles: Roles[];

    @HasMany(() => Post)
    posts: Post




}