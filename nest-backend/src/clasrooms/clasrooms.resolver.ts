import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClasroomsService } from './clasrooms.service';
import { CreateClasroomInput } from './dto/create-clasroom.input';
import { UpdateClasroomInput } from './dto/update-clasroom.input';

@Resolver('Clasroom')
export class ClasroomsResolver {
  constructor(private readonly clasroomsService: ClasroomsService) {}

  @Mutation('createClasroom')
  create(@Args('createClasroomInput') createClasroomInput: CreateClasroomInput) {
    return this.clasroomsService.create(createClasroomInput);
  }

  @Query('clasrooms')
  findAll() {
    return this.clasroomsService.findAll();
  }

  @Query('clasroom')
  findOne(@Args('id') id: number) {
    return this.clasroomsService.findOne(id);
  }

  @Mutation('updateClasroom')
  update(@Args('updateClasroomInput') updateClasroomInput: UpdateClasroomInput) {
    return this.clasroomsService.update(updateClasroomInput.id, updateClasroomInput);
  }

  @Mutation('removeClasroom')
  remove(@Args('id') id: number) {
    return this.clasroomsService.remove(id);
  }
}
