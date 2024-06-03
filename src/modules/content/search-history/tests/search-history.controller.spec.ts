import { Test, TestingModule } from '@nestjs/testing';
import { SearchHistoryController } from 'modules/content/search-history/search-history.controller';
import { SearchHistoryService } from 'modules/content/search-history/search-history.service';

describe('SearchHistoryController', () => {
  let searchHistoryController: SearchHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchHistoryController],
      providers: [{ provide: SearchHistoryService, useValue: '' }],
    }).compile();

    searchHistoryController = module.get<SearchHistoryController>(SearchHistoryController);
  });

  it('should be defined', () => {
    expect(searchHistoryController).toBeDefined();
  });
});
