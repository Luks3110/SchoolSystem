import { GradesService } from './grades.service';
import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';
export declare class GradesResolver {
    private readonly gradesService;
    constructor(gradesService: GradesService);
    create(createGradeInput: CreateGradeInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateGradeInput: UpdateGradeInput): string;
    remove(id: number): string;
}
