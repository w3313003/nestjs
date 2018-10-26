import { Injectable } from "@nestjs/common";

export interface Student {
    id: number;
    name: string;
    age: number;
}

@Injectable()
export class StudentService {
    private static students: Array<Student> = [
        { id: 1, name: '小明', age: 18 },
        { id: 2, name: '小红', age: 16 },
        { id: 3, name: '小壮', age: 20 },
    ];
    async getAll(): Promise<Student[]> {
        return StudentService.students;
    }
    async findOne(id: number): Promise<Student> {
        return StudentService.students.find(user => user.id === id);
    }
    async create(student: Student): Promise<Student[]> {
        StudentService.students.push(student);
        return StudentService.students;
    }
    async edit(id: number, name: string, age: number): Promise<Student | boolean> {
        const index = StudentService.students.findIndex(v => v.id === id);
        if (index < 0) return false;
        const newStudent = {
            id,
            name,
            age
        };
        StudentService.students[index] = newStudent;
        return newStudent;
    }
    async remove(id: number): Promise<boolean> {
        const index = StudentService.students.findIndex(v => v.id === id);
        if (index >= 0) {
            StudentService.students.splice(index, 1);
        }
        return index >= 0;
    }
}