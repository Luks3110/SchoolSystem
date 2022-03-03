import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeachersService } from './teachers.service';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';

@Resolver('Teacher')
export class TeachersResolver {
  constructor(private readonly teachersService: TeachersService) {}

  @Mutation('createTeacher')
  create(@Args('createTeacherInput') createTeacherInput: CreateTeacherInput) {
    return this.teachersService.create(createTeacherInput);
  }

  @Query('teachers')
  findAll() {
    return this.teachersService.findAll();
  }

  @Query('teacher')
  findOne(@Args('id') id: number) {
    return this.teachersService.findOne(id);
  }

  @Mutation('updateTeacher')
  update(@Args('updateTeacherInput') updateTeacherInput: UpdateTeacherInput) {
    return this.teachersService.update(updateTeacherInput.id, updateTeacherInput);
  }

  @Mutation('removeTeacher')
  remove(@Args('id') id: number) {
    return this.teachersService.remove(id);
  }
}
