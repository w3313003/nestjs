import { Injectable } from '@nestjs/common';
import { Child } from "../../interface";

@Injectable()
export class SubService {
    private child: Child;
    create(name: string, age: number) {
        this.child = {name, age};
    }
    get(): Child {
        return this.child;
    }
}