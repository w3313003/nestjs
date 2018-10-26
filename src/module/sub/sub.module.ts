import { Module } from '@nestjs/common';
import { SubController } from "./sub.controller";
import { SubService } from "./sub.service";
import { DataService } from '../data/data.service';
import { DataModule } from '../data/data.module';
@Module({
    imports: [DataModule],
    controllers: [SubController],
    providers: [SubService],
    exports: [SubService]
})
export default class SubModule {}