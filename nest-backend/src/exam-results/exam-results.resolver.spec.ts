import { Test, TestingModule } from '@nestjs/testing';
import { ExamResultsResolver } from './exam-results.resolver';
import { ExamResultsService } from './exam-results.service';

describe('ExamResultsResolver', () => {
  let resolver: ExamResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamResultsResolver, ExamResultsService],
    }).compile();

    resolver = module.get<ExamResultsResolver>(ExamResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
