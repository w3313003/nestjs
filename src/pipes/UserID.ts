import { PipeTransform, Injectable, ArgumentMetadata, HttpStatus } from "@nestjs/common";
import { ApiException, ApiErrorCode } from "exception/ApiException";

@Injectable()
export class UserIdPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        value = parseInt(value, 10);
        if (isNaN(value) || typeof value !== 'number' || value <= 0) {
            throw new ApiException("无效的用户ID", ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
        }
        return value;
    }
}