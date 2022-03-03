import { CreateExamInput } from './dto/create-exam.input';
import { UpdateExamInput } from './dto/update-exam.input';
export declare class ExamsService {
    create(createExamInput: CreateExamInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExamInput: UpdateExamInput): string;
    remove(id: number): string;
}
