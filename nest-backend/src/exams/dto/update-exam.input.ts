import { CreateExamInput } from './create-exam.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateExamInput extends PartialType(CreateExamInput) {
  id: number;
}
