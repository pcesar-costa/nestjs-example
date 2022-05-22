import {EntityRepository} from "typeorm";

import {RepositoryManager} from "../managers";
import {User} from "../models/User";

@EntityRepository(User)
export class UserRepository extends RepositoryManager<User> {
    constructor() {
        super(User);
    }
}
