import {AddRecord} from "../../types";
import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUser extends AddRecord {
    @ApiProperty()
    @IsString()
    readonly name: string;
}
