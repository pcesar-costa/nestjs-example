import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class User {
    constructor(user: User) {
        if (user) {
            this.userId = user.userId;
            this.name = user.name;
            this.phone = user.phone;
            this.createdOn = user.createdOn;
        }
    }

    @PrimaryGeneratedColumn("uuid", {name: "userId"})
    @ApiProperty()
    readonly userId: string;

    @Column()
    @ApiProperty()
    readonly name: string;

    @Column()
    @ApiProperty()
    readonly phone: string;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    @ApiProperty()
    readonly createdOn: string;
}

