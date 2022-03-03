import { StudentsService } from './students.service';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
export declare class StudentsResolver {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(createStudentInput: CreateStudentInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateStudentInput: UpdateStudentInput): string;
    remove(id: number): string;
}
