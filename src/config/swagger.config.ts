import { SwaggerCustomOptions } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export const swaggerBearerName = 'auth-token';

export const swaggerBearerParameters: SecuritySchemeObject = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
  name: 'JWT',
  description: 'Enter JWT token',
  in: 'header',
};

export const swaggerOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    displayRequestDuration: true,
    tagsSorter: 'alpha',
    persistAuthorization: true,
  },
};
