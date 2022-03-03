import { ExamsService } from './exams.service';
import { CreateExamInput } from './dto/create-exam.input';
import { UpdateExamInput } from './dto/update-exam.input';
export declare class ExamsResolver {
    private readonly examsService;
    constructor(examsService: ExamsService);
    create(createExamInput: CreateExamInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateExamInput: UpdateExamInput): string;
    remove(id: number): string;
}
