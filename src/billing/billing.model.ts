import { Column, DataType, Model, Table } from "sequelize-typescript";


interface BillingAttrs {
  water_type: string;
  price: number;
}
@Table({tableName: 'billing'})
export class Billing extends Model<Billing, BillingAttrs> {


  @Column({
  type: DataType.INTEGER,
  unique: true,
  autoIncrement: true,
  primaryKey: true
})
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  water_type: WaterType;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  price: number;
}

export enum WaterType{
  HOLD= 'Hold',
  COOL = 'Cool'
}