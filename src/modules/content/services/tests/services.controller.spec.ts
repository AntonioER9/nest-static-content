import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { Service } from '../entities/service.entity';
import { ServiceController } from '../services.controller';
import { ServiceService } from '../services.service';
import { ServiceModel, mockService } from './models/service.model';
import { FlagModel } from '../../../flags/tests/models/flag.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';

describe('ServiceController', () => {
  let controller: ServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceController],
      providers: [
        ServiceService,
        {
          provide: getRepositoryToken(Service),
          useClass: ServiceModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    controller = module.get<ServiceController>(ServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAll return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockService]);
  });
});
