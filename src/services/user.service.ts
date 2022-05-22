import {Connection} from "typeorm";
import {Injectable} from '@nestjs/common';

import {User} from "../models/User";
import {ServiceManager} from "../managers";
import {UserRepository} from "../repositories/user.repository";

@Injectable()
export class UserService extends ServiceManager<User> {
    constructor(private connection: Connection) {
        super(connection, UserRepository);
    }
}

