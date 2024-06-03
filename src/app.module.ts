import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { FlagsMiddleware } from 'common/middlewares/flags.middleware';
import configuration from './config/app.config';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { ContentModule } from './modules/content/content.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      expandVariables: true,
    }),
    MikroOrmModule.forRoot(),
    HealthModule,
    AuthModule,
    ContentModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useExisting: JwtAuthGuard,
    },
    JwtAuthGuard,
  ],
  exports: [MikroOrmModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FlagsMiddleware)
      .exclude({ path: 'health', method: RequestMethod.ALL }, 'health/(.*)')
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
