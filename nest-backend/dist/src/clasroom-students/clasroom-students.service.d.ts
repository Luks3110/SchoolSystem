import { CreateClasroomStudentInput } from './dto/create-clasroom-student.input';
import { UpdateClasroomStudentInput } from './dto/update-clasroom-student.input';
export declare class ClasroomStudentsService {
    create(createClasroomStudentInput: CreateClasroomStudentInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClasroomStudentInput: UpdateClasroomStudentInput): string;
    remove(id: number): string;
}
