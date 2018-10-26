import { Controller, Get, Param, HttpException, HttpStatus, UseFilters, ParseIntPipe } from "@nestjs/common";
import { DataService } from "./data.service";
import { HttpExceptionFilter } from "exception/http-exception.filter";
import { ApiException, ApiErrorCode } from "exception/ApiException";
import { UserIdPipe } from "pipes/UserID";
class BadRequest extends HttpException {
    constructor() {
        super("BadRequest", HttpStatus.BAD_REQUEST);
    }
}

@Controller("data")
export class DataController {
    constructor(private readonly dataService: DataService) {}
    @Get("")
    getHandler(@Param() param) {
        return this.dataService.test(param.type);
    }
    @Get("error")
    // @UseFilters(new HttpExceptionFilter())
    errorHandler() {
        throw new ApiException(ApiErrorCode['10001'], ApiErrorCode.TIME_OUT, HttpStatus.BAD_REQUEST);
        // throw new HttpException("YOU HAVE BANNED", HttpStatus.BAD_REQUEST);
        // throw new HttpException({
        //     status: HttpStatus.FORBIDDEN,
        //     error: 'YOU HAND BAN FROM STEAM',
        // }, HttpStatus.FORBIDDEN);
    }
    @Get("test/:id")
    @UseFilters(new HttpExceptionFilter())
    testHandler(@Param("id", new UserIdPipe()) id) {
        return {
            data: 88888,
        };
    }
}