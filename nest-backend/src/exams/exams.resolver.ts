import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExamsService } from './exams.service';
import { CreateExamInput } from './dto/create-exam.input';
import { UpdateExamInput } from './dto/update-exam.input';

@Resolver('Exam')
export class ExamsResolver {
  constructor(private readonly examsService: ExamsService) {}

  @Mutation('createExam')
  create(@Args('createExamInput') createExamInput: CreateExamInput) {
    return this.examsService.create(createExamInput);
  }

  @Query('exams')
  findAll() {
    return this.examsService.findAll();
  }

  @Query('exam')
  findOne(@Args('id') id: number) {
    return this.examsService.findOne(id);
  }

  @Mutation('updateExam')
  update(@Args('updateExamInput') updateExamInput: UpdateExamInput) {
    return this.examsService.update(updateExamInput.id, updateExamInput);
  }

  @Mutation('removeExam')
  remove(@Args('id') id: number) {
    return this.examsService.remove(id);
  }
}
