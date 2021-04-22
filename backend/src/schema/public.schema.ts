import { Column, ColumnType, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Public {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}