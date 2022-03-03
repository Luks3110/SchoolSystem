import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
export declare class StudentsService {
    create(createStudentInput: CreateStudentInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStudentInput: UpdateStudentInput): string;
    remove(id: number): string;
}
