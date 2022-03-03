import { Test, TestingModule } from '@nestjs/testing';
import { ClasroomsService } from './clasrooms.service';

describe('ClasroomsService', () => {
  let service: ClasroomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasroomsService],
    }).compile();

    service = module.get<ClasroomsService>(ClasroomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
