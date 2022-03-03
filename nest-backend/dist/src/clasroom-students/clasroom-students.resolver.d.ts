import { ClasroomStudentsService } from './clasroom-students.service';
import { CreateClasroomStudentInput } from './dto/create-clasroom-student.input';
import { UpdateClasroomStudentInput } from './dto/update-clasroom-student.input';
export declare class ClasroomStudentsResolver {
    private readonly clasroomStudentsService;
    constructor(clasroomStudentsService: ClasroomStudentsService);
    create(createClasroomStudentInput: CreateClasroomStudentInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateClasroomStudentInput: UpdateClasroomStudentInput): string;
    remove(id: number): string;
}
