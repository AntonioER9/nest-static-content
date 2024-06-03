import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getFlag } from '@cencosud-ds/cda-flags';
import { CDALogger } from 'common/loggers/cda.logger';

@Injectable()
export class FlagsMiddleware implements NestMiddleware {
  private readonly logger: CDALogger = new CDALogger(FlagsMiddleware.name);

  use(req: Request, _: Response, next: NextFunction) {
    let flag = req.headers.flag?.toString();
    if (flag === 'spid35') {
      flag = 'spid';
    }
    const country = req.headers.country?.toString();
    if (flag) {
      const flagResult = getFlag(flag, country);
      if (flagResult instanceof Error) {
        this.logger.warn(`getFlag error message: ${flagResult.message}`);
        throw new BadRequestException('Requested flag not found');
      }

      req.headers.flagId = flagResult.id.toString();
      req.headers.flagLabel = flagResult.flagName.toString();
      req.headers.flagCountry = flagResult.country_id.toString();
      next();
    } else {
      const errorMsg = 'Missing flag header';
      this.logger.warn(errorMsg);
      next(new BadRequestException(errorMsg));
    }
  }
}
