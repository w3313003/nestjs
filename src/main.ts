import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from "path";
import { HttpExceptionFilter } from "./exception/http-exception.filter";
import { ApiParamsValidationPipe } from 'pipes/api-params-validation.pipe';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'upload')));
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ApiParamsValidationPipe());
    app.enableCors({
        origin: '*'
    });
    await app.listen(3000);
}
bootstrap();

process.on('uncaughtException',  (err) => {
    console.error('An uncaught error occurred!');
    console.error(err.stack);
});
