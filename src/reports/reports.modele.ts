import {  Column, DataType, ForeignKey, Table, Model} from "sequelize-typescript";
import { User } from "../users/user.model";
import  {ApiProperty} from "@nestjs/swagger"

interface ReportCreationAttrs {
  use_days: number;
  start_date: string;
  end_date: string;

}

@Table({tableName: 'report'})
export class Report extends Model<Report, ReportCreationAttrs> {

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
  })
  @ApiProperty({example: "{Check table constrution Object}", description: 'Обьект показание прошлого месяца'})
  last_mounth_report: string;

  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({example: '{Check table constuction Object} ', description: 'Обьект показание этого месяца'})
  this_mounth_report: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ApiProperty({example: '23,4', description: 'Значение тарификация воды за кубометр'})
  tarification: number;

  @Column({
    type: DataType.INTEGER,
  })
  @ApiProperty({example: '31', description: 'Количество использованных дней'})
  use_days: number

  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({example: '2.03.2023', description: 'Дата начало пользования с момента оплаты'})
  start_date: string;

  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({example: '31.04.2023', description: 'Дата конца счетного периода'})
  end_date: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

 }