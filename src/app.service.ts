import { Injectable } from '@nestjs/common';
import { Car } from './interface';
@Injectable()
export class AppService {
  root(): string {
    return '6662226!';
  }
}
@Injectable()
export class DevService {
    private readonly cars: Car[] = [];
    create(car: Car) {
        this.cars.push(car);
    }
    findAll(): Car[] {
        return this.cars;
    }
}
