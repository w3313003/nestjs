import { Injectable } from "@nestjs/common";
import { Employee } from "../../entities/employee.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from '../../entities/company.entity';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>) {}
    root(): string {
        return 'Hello World!';
    }
    async create(name, age, address): Promise<string> {
        const employee = new Employee(name, age, address);
        const company = new Company();
        employee.company = company;
        company.name = "ali";
        return this.employeeRepository.save(employee).then(res => 'create done')
            .catch(err => err);
    }
    async findOne(name: string): Promise<any> {
        return await this.employeeRepository.findOne({name}).then(res => {
            if (res) {
                return res;
            } else {
                return {
                    empty: true
                };
            }
        });
    }
    async getAll(): Promise<any> {
        return await this.employeeRepository.find();
    }
}