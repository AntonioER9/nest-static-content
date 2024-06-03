import 'newrelic';
import { LogLevel, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { CDALogger } from './common/loggers/cda.logger';
import { corsOptions, validationOptions } from './config/options.config';
import { swaggerBearerName, swaggerBearerParameters, swaggerOptions } from './config/swagger.config';
import { MikroORM } from '@mikro-orm/core';

async function bootstrap() {
  // TODO: Test if this is working
  await ConfigModule.envVariablesLoaded;

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // TODO: Check why log level is ignored
  const logger = new CDALogger();
  logger.setLogLevels(configService.get<LogLevel[]>('log') ?? ['log', 'error', 'warn']);

  app.useLogger(logger);
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.use(helmet());
  app.enableShutdownHooks();

  const swaggerConfig = new DocumentBuilder()
    .setTitle(configService.get<string>('name') ?? '')
    .setDescription(configService.get<string>('description') ?? '')
    .setVersion(configService.get<string>('version') ?? '')
    .addBearerAuth(swaggerBearerParameters, swaggerBearerName)
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument, swaggerOptions);

  await app.get(MikroORM).getSchemaGenerator().ensureDatabase();
  await app.listen(configService.get<number>('port') ?? 3000);
}

void bootstrap();
