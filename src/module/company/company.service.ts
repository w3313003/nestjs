import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from '../../entities/company.entity';

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private readonly companyService: Repository<Company>) {}
}