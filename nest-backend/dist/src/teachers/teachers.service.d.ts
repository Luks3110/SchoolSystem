import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';
export declare class TeachersService {
    create(createTeacherInput: CreateTeacherInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTeacherInput: UpdateTeacherInput): string;
    remove(id: number): string;
}
