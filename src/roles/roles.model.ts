import {Column, DataType, Table, Model, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger"
import {User} from "../users/user.model";
import {UserRoles} from "./user.roles";

interface RolesCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'user_roles'})
export class Roles extends Model<Roles, RolesCreationAttrs> {

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true

    })
    @ApiProperty({example: '1', description: 'Уникальный идентификатор пользователя'})
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    @ApiProperty({example: 'Admin', description: 'Значение для роли пользователя (Админ, Рядовой пользователь)'})
    value: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty({example: 'Администрация', description: 'Описание роли'})
    description: string;

    @BelongsToMany(() => User, ()=> UserRoles )
    users: User[];
}