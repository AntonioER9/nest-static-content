import { Test, TestingModule } from '@nestjs/testing';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { REQUEST } from '@nestjs/core';
import { SearchHistoryService } from 'modules/content/search-history/search-history.service';
import { dummyHeader } from 'common/constants/constants';
import { AdapterSearchService } from 'modules/services/adapter-search/adapter-search.service';
import { mockedSearchHistoryRequest } from './models/search-history.mock';
describe('SearchHistoryService', () => {
  let searchHistoryService: SearchHistoryService;
  let adapterSearchService: DeepMocked<AdapterSearchService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchHistoryService],
    })
      .overrideProvider(REQUEST)
      .useValue('')
      .useMocker(createMock)
      .compile();

    searchHistoryService = module.get<SearchHistoryService>(SearchHistoryService);
    adapterSearchService = module.get(AdapterSearchService);
  });

  it('should be defined', () => {
    expect(searchHistoryService).toBeDefined();
  });
  describe('saveSearchHistory', () => {
    it('should process the data', () => {
      adapterSearchService.saveSearchHistory.mockResolvedValue();
      expect(searchHistoryService.saveSearchHistory(dummyHeader, mockedSearchHistoryRequest));
    });
  });
});
