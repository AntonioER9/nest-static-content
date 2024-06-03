import { ConfigService } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { TestingModule, Test } from '@nestjs/testing';
import { HealthController } from '../health.controller';
import { HealthService } from '../health.service';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule],
      controllers: [HealthController],
      providers: [HealthService, ConfigService],
    }).compile();

    controller = moduleRef.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should status return data', () => {
    expect(controller.status()).toBeTruthy();
  });
});
