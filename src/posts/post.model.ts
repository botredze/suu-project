import {Column, DataType, Table, Model, BelongsTo, ForeignKey} from "sequelize-typescript";
import {User} from "../users/user.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'post'})
export class Post extends Model<Post, PostCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true,})
    title: string;

    @Column({type: DataType.STRING, })
    content: string;

    @Column({type: DataType.STRING,})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo ( ()=> User)
    author: User
}