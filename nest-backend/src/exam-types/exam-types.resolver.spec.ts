import { Test, TestingModule } from '@nestjs/testing';
import { ExamTypesResolver } from './exam-types.resolver';
import { ExamTypesService } from './exam-types.service';

describe('ExamTypesResolver', () => {
  let resolver: ExamTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamTypesResolver, ExamTypesService],
    }).compile();

    resolver = module.get<ExamTypesResolver>(ExamTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
