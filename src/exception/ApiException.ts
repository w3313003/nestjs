import { HttpException, HttpStatus } from "@nestjs/common";

export enum ApiErrorCode {
    SUCCESS = 0,
    TIME_OUT = 10001,
    USER_ID_INVALID = 10002, // 用户 ID 无效
    USER_NAME_INVALID = 10003, // 用户 姓名 无效
    USER_AGE_INVALID = 10004, // 用户 年龄 无效
}

export class ApiException extends HttpException {
    private errorMessage: string;
    private errorCode: ApiErrorCode;
    constructor(errorMessage: string, errorCode: ApiErrorCode, statusCode: HttpStatus) {
        super(errorMessage, statusCode);
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }
    getErrorCode() {
        return this.errorCode;
    }
    getErrorMessage() {
        return this.errorMessage;
    }
}