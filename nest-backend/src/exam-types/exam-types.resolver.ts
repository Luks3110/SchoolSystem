import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExamTypesService } from './exam-types.service';
import { CreateExamTypeInput } from './dto/create-exam-type.input';
import { UpdateExamTypeInput } from './dto/update-exam-type.input';

@Resolver('ExamType')
export class ExamTypesResolver {
  constructor(private readonly examTypesService: ExamTypesService) {}

  @Mutation('createExamType')
  create(@Args('createExamTypeInput') createExamTypeInput: CreateExamTypeInput) {
    return this.examTypesService.create(createExamTypeInput);
  }

  @Query('examTypes')
  findAll() {
    return this.examTypesService.findAll();
  }

  @Query('examType')
  findOne(@Args('id') id: number) {
    return this.examTypesService.findOne(id);
  }

  @Mutation('updateExamType')
  update(@Args('updateExamTypeInput') updateExamTypeInput: UpdateExamTypeInput) {
    return this.examTypesService.update(updateExamTypeInput.id, updateExamTypeInput);
  }

  @Mutation('removeExamType')
  remove(@Args('id') id: number) {
    return this.examTypesService.remove(id);
  }
}
