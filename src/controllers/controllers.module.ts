import {Module} from "@nestjs/common";
import {ServicesModule} from "../services/services.module";
import {UserController} from "./user/user.controller";

@Module({
    imports: [ServicesModule],
    controllers: [UserController]
})
export class ControllersModule {
}
