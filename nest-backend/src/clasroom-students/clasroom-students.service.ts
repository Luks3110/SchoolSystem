import { Injectable } from '@nestjs/common';
import { CreateClasroomStudentInput } from './dto/create-clasroom-student.input';
import { UpdateClasroomStudentInput } from './dto/update-clasroom-student.input';

@Injectable()
export class ClasroomStudentsService {
  create(createClasroomStudentInput: CreateClasroomStudentInput) {
    return 'This action adds a new clasroomStudent';
  }

  findAll() {
    return `This action returns all clasroomStudents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clasroomStudent`;
  }

  update(id: number, updateClasroomStudentInput: UpdateClasroomStudentInput) {
    return `This action updates a #${id} clasroomStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} clasroomStudent`;
  }
}
