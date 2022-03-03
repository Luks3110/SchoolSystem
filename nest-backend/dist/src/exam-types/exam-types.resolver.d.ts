import { ExamTypesService } from './exam-types.service';
import { CreateExamTypeInput } from './dto/create-exam-type.input';
import { UpdateExamTypeInput } from './dto/update-exam-type.input';
export declare class ExamTypesResolver {
    private readonly examTypesService;
    constructor(examTypesService: ExamTypesService);
    create(createExamTypeInput: CreateExamTypeInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateExamTypeInput: UpdateExamTypeInput): string;
    remove(id: number): string;
}
