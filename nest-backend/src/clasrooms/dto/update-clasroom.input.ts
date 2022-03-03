import { CreateClasroomInput } from './create-clasroom.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateClasroomInput extends PartialType(CreateClasroomInput) {
  id: number;
}
