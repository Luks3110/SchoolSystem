import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';
export declare class GradesService {
    create(createGradeInput: CreateGradeInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGradeInput: UpdateGradeInput): string;
    remove(id: number): string;
}
