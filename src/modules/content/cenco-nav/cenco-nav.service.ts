import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { cencoNavByFlag } from 'common/utils/cenco-nav';

@Injectable()
export class CencoNavService {
  private readonly logger: CDALogger = new CDALogger(CencoNavService.name);

  findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const response = cencoNavByFlag[headers.flagLabel];

    if (response.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return response;
  }
}
