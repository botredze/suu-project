import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.model";
import {ApiProperty} from '@nestjs/swagger'
interface UserDetailArrts {

}

export class UserDetails extends Model<UserDetails, UserDetailArrts> {

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    
      })
      @ApiProperty({example: '1',description: 'Уникальный идентификатор адреса' })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      @ApiProperty({example: 'Алиев ',description: 'Фамилия абонента' })
    first_name: string; 

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      @ApiProperty({example: 'Баатыр',description: 'Имя абонента' })
    last_name: string; 

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      @ApiProperty({example: '20.1.1994 ',description: 'Дата рождение' })
    birth_date: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      @ApiProperty({example: '+996708 82 82 38 ',description: 'Рабочий номер телефона' })
    phone_number: string; 

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      @ApiProperty({example: '+996708 82 82 38 ',description: 'Рабочий номер телефона для WhastApp' })
    wa_phone_number: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      @ApiProperty({example: '9182903809823',description: 'Персональный номер абонента' })
    persenal_number: string; 

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })

      @ApiProperty({example: 'Entity',description: 'Тип лица Физ/Юр' })
    user_type:  UserType


    @HasOne( () => User)
    user_id: User
}

export enum UserType {
    INDIVIDUAL = 'Individual', 
    ENTITY = '™Entity'
}