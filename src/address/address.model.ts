import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.model";
import {ApiProperty} from '@nestjs/swagger'

interface AddressCreationArrts {
  street: string;
  home_number: string;
  region: string;
  area: string;
}

@Table({tableName: 'address'})
export class Address extends Model<Address> {
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
  @ApiProperty({example: 'Улица карыпжана ',description: 'Название улицы' })
  street: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ApiProperty({example: '12',description: 'Номер дома' })
  home_number: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({example: 'Ыссык-Кол',description: 'Область' })
  region: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({example: 'Туп',description: 'Район' })
  area: string

  @HasOne( () => User)
  user_id: User
}
