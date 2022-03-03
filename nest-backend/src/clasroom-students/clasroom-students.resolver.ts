import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClasroomStudentsService } from './clasroom-students.service';
import { CreateClasroomStudentInput } from './dto/create-clasroom-student.input';
import { UpdateClasroomStudentInput } from './dto/update-clasroom-student.input';

@Resolver('ClasroomStudent')
export class ClasroomStudentsResolver {
  constructor(private readonly clasroomStudentsService: ClasroomStudentsService) {}

  @Mutation('createClasroomStudent')
  create(@Args('createClasroomStudentInput') createClasroomStudentInput: CreateClasroomStudentInput) {
    return this.clasroomStudentsService.create(createClasroomStudentInput);
  }

  @Query('clasroomStudents')
  findAll() {
    return this.clasroomStudentsService.findAll();
  }

  @Query('clasroomStudent')
  findOne(@Args('id') id: number) {
    return this.clasroomStudentsService.findOne(id);
  }

  @Mutation('updateClasroomStudent')
  update(@Args('updateClasroomStudentInput') updateClasroomStudentInput: UpdateClasroomStudentInput) {
    return this.clasroomStudentsService.update(updateClasroomStudentInput.id, updateClasroomStudentInput);
  }

  @Mutation('removeClasroomStudent')
  remove(@Args('id') id: number) {
    return this.clasroomStudentsService.remove(id);
  }
}
