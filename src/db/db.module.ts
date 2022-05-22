import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql', // if changed, it's need to install db packages
            host: 'aws-cloud.domain.sa-east-1.rds.amazonaws.com',
            port: 3306,
            username: 'example_username',
            password: 'example_secure_password',
            database: 'example_db',
            entities: ["dist/models/*.js"], // get all models built, do not need to change
            synchronize: true,
        }),
    ],
})
export class DbModule {
}
