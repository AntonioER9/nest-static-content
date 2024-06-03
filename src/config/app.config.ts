import { LogLevel } from '@nestjs/common';

export type AppConfig = {
  name: string;
  port: number;
  version: string;
  description: string;
  log: LogLevel[];

  auth: {
    jwtSecret: string;
    jwtExp: string;
  };

  paris: {
    urlMisCompras: string;
    urlHelpForm: string;
  };

  adapterSearch: {
    baseUrl: string;
    token: string;
  };
};

export default (): AppConfig => ({
  name: process.env.APP_NAME ?? 'static-content',
  port: process.env.APP_PORT ? Number.parseInt(process.env.APP_PORT, 10) : 5000,
  version: process.env.APP_VERSION ?? '1.0.0',
  description: process.env.APP_DESC ?? 'Static Content API',
  log: process.env.APP_DEBUG ? ['log', 'debug', 'error', 'warn'] : ['log', 'error', 'warn'],

  auth: {
    jwtSecret: process.env.JWT_SECRET ?? '',
    jwtExp: process.env.JWT_EXP ?? '3600s',
  },

  paris: {
    urlMisCompras: process.env.URL_MIS_COMPRAS ?? '',
    urlHelpForm: process.env.URL_HELP_FORM ?? '',
  },

  adapterSearch: {
    baseUrl: process.env.HC_ADAPTER_SEARCH_BASE_URL ?? '',
    token: process.env.HC_ADAPTER_SEARCH_TOKEN ?? '',
  },
});
