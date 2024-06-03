import { Controller, Headers, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiHeaders } from '@nestjs/swagger';
import { swaggerBearerName } from 'config/swagger.config';
import { SearchHistoryRequestDto } from './dto/search-history.request.dto';
import { SearchHistoryService } from './search-history.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('search-history')
@ApiTags('Content - Search History')
@ApiBearerAuth(swaggerBearerName)
@ApiHeaders([
  {
    name: 'flag',
    description: 'Requested flag name',
    example: 'paris',
    required: true,
  },
  {
    name: 'country',
    description: 'Requested country code',
    example: 'cl',
    required: true,
  },
  {
    name: 'traceid',
    description: 'Requested trace id code',
    example: '3a680b97-bb40-472f-813e-5b75b648de88',
    required: true,
  },
])
export class SearchHistoryController {
  constructor(private readonly searchHistoryService: SearchHistoryService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'save the search history',
    description: 'API to save the search history by flag and country',
  })
  save(@Headers() headers: HelpCenterHeaders, @Body() body: SearchHistoryRequestDto): Promise<void> {
    return this.searchHistoryService.saveSearchHistory(headers, body);
  }
}
