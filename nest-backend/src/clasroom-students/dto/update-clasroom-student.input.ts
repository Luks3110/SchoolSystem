import { CreateClasroomStudentInput } from './create-clasroom-student.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateClasroomStudentInput extends PartialType(CreateClasroomStudentInput) {
  id: number;
}
