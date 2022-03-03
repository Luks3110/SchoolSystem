import { CreateExamTypeInput } from './create-exam-type.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateExamTypeInput extends PartialType(CreateExamTypeInput) {
  id: number;
}
