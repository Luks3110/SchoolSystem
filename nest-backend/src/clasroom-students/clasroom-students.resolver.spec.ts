import { Test, TestingModule } from '@nestjs/testing';
import { ClasroomStudentsResolver } from './clasroom-students.resolver';
import { ClasroomStudentsService } from './clasroom-students.service';

describe('ClasroomStudentsResolver', () => {
  let resolver: ClasroomStudentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasroomStudentsResolver, ClasroomStudentsService],
    }).compile();

    resolver = module.get<ClasroomStudentsResolver>(ClasroomStudentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
