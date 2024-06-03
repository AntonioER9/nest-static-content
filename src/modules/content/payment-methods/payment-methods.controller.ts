import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { PaymentMethod } from './entities/payment-methods.entity';
import { PaymentMethodService } from './payment-methods.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('payments')
@ApiTags('Content - PaymentMethods')
@ApiBearerAuth(swaggerBearerName)
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Get()
  @ApiOperation({ summary: 'Find all payment methods by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<PaymentMethod[]> {
    return this.paymentMethodService.findByFlag(traceId, headers);
  }
}
