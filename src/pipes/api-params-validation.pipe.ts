import { Injectable, ArgumentMetadata, PipeTransform, HttpStatus } from "@nestjs/common";
import { ApiException } from "exception/ApiException";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class ApiParamsValidationPipe implements PipeTransform {
    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
    async transform(value: any, metaData: ArgumentMetadata) {
        const { metatype } = metaData;
        // 如果参数不是类 而是普通的JavaScript对象则不进行验证 此处Object在终端上显示为[Function: Object]
        if (!metaData || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        console.log(object);
        const errors = await validate(object);
        if (errors.length > 0) {
            // 获取到第一个没有通过验证的错误对象
            const error = errors.shift();
            // 未通过验证的kv
            const constraints = error.constraints;
            const contexts = error.contexts;
            for (const key of Object.keys(constraints)) {
                throw new ApiException(constraints[key], contexts[key].errorCode, HttpStatus.BAD_REQUEST);
            }
        }
        // 返回DTO对象 而不是原始对象
        return object;
    }
}