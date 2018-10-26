import { Controller, Post, Get, Body, Param, UsePipes } from "@nestjs/common";
import { StudentService } from "./student.service";
import { StudentDto } from "dto/createStudent.dto";

@Controller("student")
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    @Get()
    getAll() {
        return this.studentService.getAll();
    }
    @Post("create/:id")
    // 使用DTO包装原始类型，使其被ApiParamsValidationPipe验证识别
    create(@Body() body: StudentDto) {
        const { id, age, name } = body;
        return this.studentService.create({
            id,
            age,
            name
        });
    }
}