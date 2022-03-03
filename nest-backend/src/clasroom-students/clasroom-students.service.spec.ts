import { Test, TestingModule } from '@nestjs/testing';
import { ClasroomStudentsService } from './clasroom-students.service';

describe('ClasroomStudentsService', () => {
  let service: ClasroomStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasroomStudentsService],
    }).compile();

    service = module.get<ClasroomStudentsService>(ClasroomStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
