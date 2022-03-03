import { CreateExamResultInput } from './create-exam-result.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateExamResultInput extends PartialType(CreateExamResultInput) {
  id: number;
}
