import { Injectable } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { SearchHistoryRequestDto } from './dto/search-history.request.dto';
import { AdapterSearchService } from 'modules/services/adapter-search/adapter-search.service';
@Injectable()
export class SearchHistoryService {
  private readonly logger: CDALogger = new CDALogger(SearchHistoryService.name);

  constructor(private readonly adapterSearch: AdapterSearchService) {}

  async saveSearchHistory(headers: HelpCenterHeaders, body: SearchHistoryRequestDto): Promise<void> {
    this.logger.cdaDebug(headers.traceid, 'saveSearchHistory', 'trying to save the search history', { headers, body });
    await this.adapterSearch.saveSearchHistory(
      headers.traceid,
      headers.flagLabel,
      headers.flagCountry,
      headers.token,
      body,
    );
  }
}
