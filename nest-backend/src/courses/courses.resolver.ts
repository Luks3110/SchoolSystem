import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';

@Resolver('Course')
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}

  @Mutation('createCourse')
  create(@Args('createCourseInput') createCourseInput: CreateCourseInput) {
    return this.coursesService.create(createCourseInput);
  }

  @Query('courses')
  findAll() {
    return this.coursesService.findAll();
  }

  @Query('course')
  findOne(@Args('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Mutation('updateCourse')
  update(@Args('updateCourseInput') updateCourseInput: UpdateCourseInput) {
    return this.coursesService.update(updateCourseInput.id, updateCourseInput);
  }

  @Mutation('removeCourse')
  remove(@Args('id') id: number) {
    return this.coursesService.remove(id);
  }
}
