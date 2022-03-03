import { Injectable } from '@nestjs/common';
import { CreateClasroomInput } from './dto/create-clasroom.input';
import { UpdateClasroomInput } from './dto/update-clasroom.input';

@Injectable()
export class ClasroomsService {
  create(createClasroomInput: CreateClasroomInput) {
    return 'This action adds a new clasroom';
  }

  findAll() {
    return `This action returns all clasrooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clasroom`;
  }

  update(id: number, updateClasroomInput: UpdateClasroomInput) {
    return `This action updates a #${id} clasroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} clasroom`;
  }
}
