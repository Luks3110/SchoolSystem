import { ExamResultsService } from './exam-results.service';
import { CreateExamResultInput } from './dto/create-exam-result.input';
import { UpdateExamResultInput } from './dto/update-exam-result.input';
export declare class ExamResultsResolver {
    private readonly examResultsService;
    constructor(examResultsService: ExamResultsService);
    create(createExamResultInput: CreateExamResultInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateExamResultInput: UpdateExamResultInput): string;
    remove(id: number): string;
}
