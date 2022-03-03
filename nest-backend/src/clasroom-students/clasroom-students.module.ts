import { Module } from '@nestjs/common';
import { ClasroomStudentsService } from './clasroom-students.service';
import { ClasroomStudentsResolver } from './clasroom-students.resolver';

@Module({
  providers: [ClasroomStudentsResolver, ClasroomStudentsService]
})
export class ClasroomStudentsModule {}
