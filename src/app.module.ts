import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController, DevController } from './app.controller';
import { Logger, test } from 'middlerWare/logger';
import { AppService, DevService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainModule } from 'module/index';
import * as fs from "fs";
import * as path from "path";
const config = fs.readFileSync(path.resolve(__dirname, "..", "ormconfig.json"), "utf-8");
@Module({
    imports: [TypeOrmModule.forRoot(JSON.parse(config)), MainModule],
    controllers: [AppController, DevController],
    providers: [AppService, DevService]
})
export class AppModule implements NestModule {
    // 中间件 NestModule需要实现configure方法
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(test).with(1).forRoutes('/');
    }
}
