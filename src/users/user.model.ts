import {Column, DataType, Table, Model} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger"

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

    first_name: string;
    last_name: string;
    phoneNumber: string;
    address: string;


}