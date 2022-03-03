import { CoursesService } from './courses.service';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
export declare class CoursesResolver {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseInput: CreateCourseInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateCourseInput: UpdateCourseInput): string;
    remove(id: number): string;
}
