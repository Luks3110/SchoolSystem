import { TeachersService } from './teachers.service';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';
export declare class TeachersResolver {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    create(createTeacherInput: CreateTeacherInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateTeacherInput: UpdateTeacherInput): string;
    remove(id: number): string;
}
