import { Get, Controller, Param } from "@nestjs/common";
import { DataService } from "../data/data.service";

@Controller('sub')
export class SubController {
    constructor(private  readonly dataService: DataService) {}
    @Get()
    test() {
        return "666";
    }
    @Get(":type")
    getData(@Param() param) {
        return name;
    }
}