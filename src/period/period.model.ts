import { Column, DataType, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";

interface PeridArrts{
  start_date: Date;
  endDate: Date;
}

@Table({tableName: 'period'})
export class Period extends Model<Period,PeridArrts> {

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true

  })
  id: number;

  @Column({
    allowNull: false,
    type: DataType.RANGE(DataTypes.DATE)
  })
  start_date: Date;

  @Column({
    allowNull: false,
    type: DataType.RANGE(DataTypes.DATE)
  })
  end_date: Date;


  @Column({
    type: DataType.INTEGER,
  })
  use_days: number
}