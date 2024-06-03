import { Controller, Get, Headers, ParseIntPipe, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { DeliveryCostService } from './delivery-cost.service';
import { swaggerBearerName } from 'config/swagger.config';
import { DeliveryCostLocationType } from './entities/delivery-cost-location-type.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('delivery-cost')
@ApiTags('Content - Delivery Cost')
@ApiBearerAuth(swaggerBearerName)
export class DeliveryCostController {
  constructor(private readonly deliveryCostService: DeliveryCostService) {}

  @Get('locations')
  @ApiOperation({ summary: 'Find all delivery cost locations by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async getLocations(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<unknown[]> {
    return this.deliveryCostService.getLocations(traceId, headers);
  }

  @Get('types')
  @ApiOperation({ summary: 'Find all delivery cost types by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async getTypes(
    @Headers() headers: HelpCenterHeaders,
    @Query('location', new ParseIntPipe()) location: number,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<DeliveryCostLocationType[]> {
    return this.deliveryCostService.getTypes(traceId, headers, location);
  }
}
