import { SearchHistoryRequestDto } from '../../dto/search-history.request.dto';

export const mockedSearchHistoryRequest: SearchHistoryRequestDto = {
  origin: 'test',
  resultCount: 1,
  searchClick: true,
  searchedPhrase: 'test',
  urlFrom: 'test',
  urlToGo: 'test',
};
