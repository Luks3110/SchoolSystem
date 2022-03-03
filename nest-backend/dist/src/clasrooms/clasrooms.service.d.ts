import { CreateClasroomInput } from './dto/create-clasroom.input';
import { UpdateClasroomInput } from './dto/update-clasroom.input';
export declare class ClasroomsService {
    create(createClasroomInput: CreateClasroomInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClasroomInput: UpdateClasroomInput): string;
    remove(id: number): string;
}
