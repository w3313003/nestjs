import { Get, Controller, Param, Query, Post, Req, Body, HttpCode } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}
    @Get()
    root(): string{
        console.log(123);
        return this.employeeService.root();
    }
    @Get('findOne')
    async findOne(@Query() query) {
        console.log(query.name);
        return this.employeeService.findOne(query.name);
    }
    @Post('create')
    async create(@Body() body) {
        const { name, age, address } = body;
        const ret = await this.employeeService.create(name, age , address);
        return {
            code: 0,
            msg: "success",
            data: ret
        };
    }
    @Post("getOne")
    async getOne(@Req() req) {
        const name = req.body.name;
        return this.employeeService.findOne(name);
    }
    @Get("getAll")
    async getAll() {
        return this.employeeService.getAll();
    }
}
