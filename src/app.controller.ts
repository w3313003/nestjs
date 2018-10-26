import {
  Get,
  Controller,
  HttpCode,
  Res,
  Req,
  Query,
  Headers,
  Body,
  Post,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService, DevService } from './app.service';
import { SubService } from 'module/sub/sub.service';
import { HttpExceptionFilter } from 'exception/http-exception.filter';

class TestPost {
  readonly name: string;
  readonly age: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @UseFilters(HttpExceptionFilter)
  root(): string {
    return this.appService.root();
  }
}

@Controller('dev')
export class DevController {
  constructor(private readonly devService: DevService) {
    this.devService = devService;
  }
  @Get(':id')
  test(@Res() res, @Req() req, @Query() query, @Headers() headers): void {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'cache-control': 'no-store',
    });
    for (const i of Object.keys(headers)) {
      res.write(
        `<div><span style="color:red">${i}:</span> ${headers[i]} </div>`,
      );
    }
    res.write(`<div>params:${req.params.id}</div>`);
    res.end();
  }
  @Post()
  post(@Body() testPost: TestPost, @Headers() Headers) {
    this.devService.create({ brand: 'bwm', price: 666 });
    return {
      cars: this.devService.findAll(),
    };
  }
}
