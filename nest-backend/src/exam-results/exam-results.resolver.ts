import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExamResultsService } from './exam-results.service';
import { CreateExamResultInput } from './dto/create-exam-result.input';
import { UpdateExamResultInput } from './dto/update-exam-result.input';

@Resolver('ExamResult')
export class ExamResultsResolver {
  constructor(private readonly examResultsService: ExamResultsService) {}

  @Mutation('createExamResult')
  create(@Args('createExamResultInput') createExamResultInput: CreateExamResultInput) {
    return this.examResultsService.create(createExamResultInput);
  }

  @Query('examResults')
  findAll() {
    return this.examResultsService.findAll();
  }

  @Query('examResult')
  findOne(@Args('id') id: number) {
    return this.examResultsService.findOne(id);
  }

  @Mutation('updateExamResult')
  update(@Args('updateExamResultInput') updateExamResultInput: UpdateExamResultInput) {
    return this.examResultsService.update(updateExamResultInput.id, updateExamResultInput);
  }

  @Mutation('removeExamResult')
  remove(@Args('id') id: number) {
    return this.examResultsService.remove(id);
  }
}
