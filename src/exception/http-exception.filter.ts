import { HttpException, ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { ApiException } from "./ApiException";

interface T {
    [string: string]: any;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(),
            response = ctx.getResponse(),
            request = ctx.getRequest(),
            status = exception.getStatus();
        const ret: T = {
            status,
            time: new Date().toLocaleString(),
            errorMessage: exception.getResponse(),
            path: request.url,
            msg: (exception.getResponse() as any).message
        };
        Reflect.getPrototypeOf(exception).constructor === ApiException ?
            ret.errorCode = (exception as ApiException).getErrorCode() : "";
        response.status(status).json(ret);
    }
}