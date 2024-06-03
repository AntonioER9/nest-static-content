import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { TechnicalServiceBrand } from '../entities/technical-service-brand.entity';
import { TechnicalServiceController } from '../technical-services.controller';
import { TechnicalServiceService } from '../technical-services.service';
import { TechnicalServiceBrandModel, mockTechnicalServiceBrand } from './models/technical-service-brand.model';
import { dummyTraceId, dummyHeader, dummyId } from 'common/constants/constants';

describe('TechnicalServiceController', () => {
  let controller: TechnicalServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalServiceController],
      providers: [
        TechnicalServiceService,
        {
          provide: getRepositoryToken(TechnicalServiceBrand),
          useClass: TechnicalServiceBrandModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    controller = module.get<TechnicalServiceController>(TechnicalServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllBrandsByFlag return data', async () => {
    expect(await controller.findAllBrandsByFlag(dummyHeader, dummyTraceId)).toEqual([mockTechnicalServiceBrand]);
  });

  it('should findOneBrandWithTechnicalServices return data', async () => {
    expect(await controller.findOneBrandWithTechnicalServices(dummyTraceId, dummyId)).toEqual(
      mockTechnicalServiceBrand,
    );
  });
});
