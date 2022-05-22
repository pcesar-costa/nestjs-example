import {AddRecord} from "../../types";
import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddUser extends AddRecord {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly phone: string;
}
