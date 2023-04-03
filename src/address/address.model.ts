import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger'
import { UserDetails } from "src/user-details/user-details.model";
interface AddressCreationArrts {
    street: string;
    home_number: number;
    region: string;
    area: string;
    user_details_id: number;
}

@Table({tableName: 'address'})
export class Address extends Model<Address, AddressCreationArrts> {
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
  @ApiProperty({example: 'Ой-Булак',description: 'Город или Село' })
  city: string;

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

  @HasOne( () => UserDetails)
  userDetails: UserDetails[]
}
