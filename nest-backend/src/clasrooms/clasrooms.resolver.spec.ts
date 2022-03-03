import { Test, TestingModule } from '@nestjs/testing';
import { ClasroomsResolver } from './clasrooms.resolver';
import { ClasroomsService } from './clasrooms.service';

describe('ClasroomsResolver', () => {
  let resolver: ClasroomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasroomsResolver, ClasroomsService],
    }).compile();

    resolver = module.get<ClasroomsResolver>(ClasroomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
