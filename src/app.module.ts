import {Module} from '@nestjs/common';
import {DbModule} from "./db/db.module";
import {ServicesModule} from "./services/services.module";
import {ControllersModule} from "./controllers/controllers.module";

@Module({
    imports: [
        DbModule,
        ServicesModule,
        ControllersModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
