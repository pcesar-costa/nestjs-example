import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {HttpExceptionFilter} from "./utils";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Nestjs Example')
        .setDescription('The Nestjs Example API description')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('apidoc', app, document);

    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            skipMissingProperties: false,
        }),
    );

    await app.listen(3000);
}

bootstrap().then(() => {
    console.log(`Api Running on: http://localhost:${3000}`)
    console.log(`Swagger running on: http://localhost:${3000}/apidoc`)
})
