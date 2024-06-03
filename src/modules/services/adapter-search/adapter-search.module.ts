import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AdapterSearchService } from './adapter-search.service';

@Module({
  imports: [HttpModule],
  providers: [AdapterSearchService],
  exports: [AdapterSearchService],
})
export class AdapterSearchModule {}
