import { Controller, Get, Query, Headers, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { TechnicalServiceBrand } from './entities/technical-service-brand.entity';
import { TechnicalServiceService } from './technical-services.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('technical-services')
@ApiTags('Content - Technical services')
@ApiBearerAuth(swaggerBearerName)
export class TechnicalServiceController {
  constructor(private readonly technicalServiceService: TechnicalServiceService) {}

  @Get('brands')
  @ApiOperation({ summary: 'Find all brands by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllBrandsByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<TechnicalServiceBrand[]> {
    return this.technicalServiceService.findAllBrandsByFlag(traceId, headers);
  }

  @Get('brands/:id')
  @ApiOperation({ summary: 'Find one brand with technical services by id' })
  @ApiQuery({ name: 'traceId', required: false })
  async findOneBrandWithTechnicalServices(
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
    @Param('id') id: number,
  ): Promise<TechnicalServiceBrand> {
    return this.technicalServiceService.findOneBrandById(traceId, id);
  }
}
