import { CreateExamTypeInput } from './dto/create-exam-type.input';
import { UpdateExamTypeInput } from './dto/update-exam-type.input';
export declare class ExamTypesService {
    create(createExamTypeInput: CreateExamTypeInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExamTypeInput: UpdateExamTypeInput): string;
    remove(id: number): string;
}
