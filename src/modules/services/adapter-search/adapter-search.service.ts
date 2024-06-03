import { Injectable } from '@nestjs/common';
import { AxiosHeaders, AxiosRequestConfig, isAxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { SearchHistoryRequestDto } from 'modules/content/search-history/dto/search-history.request.dto';
import { CDALogger } from 'common/loggers/cda.logger';

@Injectable()
export class AdapterSearchService {
  private readonly logger: CDALogger = new CDALogger(AdapterSearchService.name);
  private readonly headers: AxiosHeaders = new AxiosHeaders({
    Accept: 'application/json',
  });
  private requestConfig: AxiosRequestConfig;

  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
    this.requestConfig = {
      method: '',
      baseURL: this.configService.get<string>('adapterSearch.baseUrl', ''),
      url: '',
      headers: this.headers.setAuthorization(`Bearer ${this.configService.get<string>('staticContent.token', '')}`),
    };
  }

  async saveSearchHistory(
    traceId: string,
    flag: string,
    country: string,
    token: string,
    request: SearchHistoryRequestDto,
  ): Promise<void> {
    const endpoint = 'search-history';
    return await this.apiCallBeingProcessed(traceId, 'post', `${endpoint}`, flag, country, token, request);
  }

  private async apiCallBeingProcessed(
    traceid: string,
    method: string,
    endpoint: string,
    flag: string,
    country: string,
    token: string,
    params?: unknown,
  ): Promise<void> {
    try {
      this.requestConfig.method = method;
      this.requestConfig.url = endpoint;
      const apikey = this.configService.get<string>('adapterSearch.token', '');
      this.requestConfig.headers = { ...this.headers, flag, country, traceid, token, 'api-key': apikey };
      if (params) this.requestConfig.data = params;
      await this.httpService.axiosRef.request(this.requestConfig);
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response) {
        this.logger.cdaError(traceid, 'apiCallBeingProcessed', error.message);
      } else {
        this.logger.cdaWarn(traceid, 'apiCallBeingProcessed', 'An unknown error ocurred');
      }
    }
  }
}
