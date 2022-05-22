import {
    Controller,
    Get,
    ClassSerializerInterceptor,
    Param,
    UseInterceptors,
    Body,
    Post,
    Query,
    Delete, Put
} from '@nestjs/common';
import {QueryParams} from "../../types";
import {GenericValidator} from "../../validators";
import {User} from "../../models/User";
import {AddUser} from "./add.user";
import {UserService} from "../../services/user.service";
import {UpdateUser} from "./update.user";
import {ApiExtraModels, ApiTags} from "@nestjs/swagger";

@ApiTags("user")
@ApiExtraModels(User)
@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post()
    async create(@Body(GenericValidator) addUser: AddUser): Promise<User> {
        const user = await this.userService.create(addUser);
        return new User(user);
    }

    @Get()
    async getAll(@Query() query: QueryParams): Promise<User[]> {
        return await this.userService.query(query);
    }

    @Get(":id")
    async get(@Param("id") id: string): Promise<User> {
        return await this.userService.read(id);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body(GenericValidator) updateUser: UpdateUser): Promise<User> {
        return await this.userService.update(id, updateUser);
    }

    @Delete(":id")
    async remove(@Param("id") id: string): Promise<any> {
        return await this.userService.delete(id);
    }
}