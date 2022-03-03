import { CreateExamResultInput } from './dto/create-exam-result.input';
import { UpdateExamResultInput } from './dto/update-exam-result.input';
export declare class ExamResultsService {
    create(createExamResultInput: CreateExamResultInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExamResultInput: UpdateExamResultInput): string;
    remove(id: number): string;
}
