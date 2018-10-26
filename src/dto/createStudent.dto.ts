import { Student } from "../module/student/student.service";
import { ApiErrorCode } from "../exception/ApiException";
import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';
import { Type } from "class-transformer";

export class StudentDto implements Student {
    @Type(() => Number)
    @IsInt({ message: '用户ID必须是整数', context: { errorCode: ApiErrorCode.USER_ID_INVALID } })
    @Min(1, { message: '用户ID必须大于等于1', context: { errorCode: ApiErrorCode.USER_ID_INVALID } })
    readonly id: number;

    @Type(() => String)
    @IsNotEmpty({ message: '用户姓名是必不可少的', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    @IsString({message: "用户姓名是必不可少的", context: {errorCode: ApiErrorCode.USER_NAME_INVALID}})
    readonly name: string;

    @Type(() => Number)
    @IsInt({ message: '用户年龄必须是整数', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    @Min(1, { message: '用户年龄必须大于1', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    @Max(200, { message: '用户年龄必须小于200', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly age: number;
}