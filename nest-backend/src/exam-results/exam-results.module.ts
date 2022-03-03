import { Module } from '@nestjs/common';
import { ExamResultsService } from './exam-results.service';
import { ExamResultsResolver } from './exam-results.resolver';

@Module({
  providers: [ExamResultsResolver, ExamResultsService]
})
export class ExamResultsModule {}
