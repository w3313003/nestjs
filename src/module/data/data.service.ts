import { Injectable } from "@nestjs/common";

@Injectable()
export class DataService {
    async test(type: any) {
        return {
            type
        };
    }
}