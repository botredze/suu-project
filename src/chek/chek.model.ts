import { Column, DataType, Table, Model, ForeignKey } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger"
import { User } from "../users/user.model";

interface  CheckCreationAttrs {
  summ: number,
  use_days: number
  status: string
}
@Table({tableName: 'check'})
export class Check extends Model<Check, CheckCreationAttrs>{

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
    allowNull: false,
  })
  @ApiProperty({example: '2304', description: "Сумма за оплату"})
  summ: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ApiProperty({example: '31', description: 'Количество дней с момента оплата'})
  use_days: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({example: '12,10,2023', description: 'Дата оплаты'})
  pay_Date: string;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({example: 'ОПЛАЧЕН', description: 'Статус оплаты по чеку'})
  status: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;



}
