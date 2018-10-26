import { Injectable, NestMiddleware, MiddlewareFunction } from "@nestjs/common";

@Injectable()
export class Logger implements NestMiddleware {
    resolve(index: number): MiddlewareFunction {
        return (req, res, next) => {
            next();
        };
    }
}

export function test(req, res, next) {
    console.log(`Request...`);
    next();
}