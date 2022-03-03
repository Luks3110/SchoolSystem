import { ClasroomsService } from './clasrooms.service';
import { CreateClasroomInput } from './dto/create-clasroom.input';
import { UpdateClasroomInput } from './dto/update-clasroom.input';
export declare class ClasroomsResolver {
    private readonly clasroomsService;
    constructor(clasroomsService: ClasroomsService);
    create(createClasroomInput: CreateClasroomInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateClasroomInput: UpdateClasroomInput): string;
    remove(id: number): string;
}
