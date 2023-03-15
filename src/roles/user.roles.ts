import {Column, DataType, Table, Model, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger"
import {User} from "../users/user.model";
import {Roles} from "./roles.model";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER,})
    @ForeignKey(()=> Roles)
    value: string;

    @Column({type: DataType.INTEGER,})
    @ForeignKey(()=> User)
    description: string;
}