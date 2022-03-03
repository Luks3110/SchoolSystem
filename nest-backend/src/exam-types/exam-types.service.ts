import { Injectable } from '@nestjs/common';
import { CreateExamTypeInput } from './dto/create-exam-type.input';
import { UpdateExamTypeInput } from './dto/update-exam-type.input';

@Injectable()
export class ExamTypesService {
  create(createExamTypeInput: CreateExamTypeInput) {
    return 'This action adds a new examType';
  }

  findAll() {
    return `This action returns all examTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examType`;
  }

  update(id: number, updateExamTypeInput: UpdateExamTypeInput) {
    return `This action updates a #${id} examType`;
  }

  remove(id: number) {
    return `This action removes a #${id} examType`;
  }
}
