import { Entity, Column } from "typeorm";
import { BasicEntity } from "../core/basic_entity";

@Entity("instagram")
export class InstagramEntity extends BasicEntity {
    @Column()
    token: string;

    @Column()
    expiryTime: number;
}
