import { Module } from '@nestjs/common';
import { ExamTypesService } from './exam-types.service';
import { ExamTypesResolver } from './exam-types.resolver';

@Module({
  providers: [ExamTypesResolver, ExamTypesService]
})
export class ExamTypesModule {}
