import { ValidationPipeOptions } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

import appConfig from './app.config';

export const corsOptions: CorsOptions = {
  origin: true,
  preflightContinue: false,
};

export const validationOptions: ValidationPipeOptions = { transform: true, forbidUnknownValues: false };

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: appConfig().auth.jwtSecret,
      signOptions: { expiresIn: appConfig().auth.jwtExp },
    };
  },
};
