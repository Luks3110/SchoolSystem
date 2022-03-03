import { Module } from '@nestjs/common';
import { ClasroomsService } from './clasrooms.service';
import { ClasroomsResolver } from './clasrooms.resolver';

@Module({
  providers: [ClasroomsResolver, ClasroomsService]
})
export class ClasroomsModule {}
