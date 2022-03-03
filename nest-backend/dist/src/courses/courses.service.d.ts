import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
export declare class CoursesService {
    create(createCourseInput: CreateCourseInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourseInput: UpdateCourseInput): string;
    remove(id: number): string;
}
