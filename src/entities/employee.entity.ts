import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, CreateDateColumn } from 'typeorm';
import { Company } from './company.entity';
@Entity()
export class Employee {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @CreateDateColumn()
    date: Date;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    @ManyToOne(type => Company, company => company.employees, { cascade: true })

    @JoinTable()
    company: Company;
}
