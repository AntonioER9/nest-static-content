import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { PrefooterCategory } from '../entities/prefooter-category.entity';
import { PrefooterController } from '../prefooters.controller';
import { PrefooterService } from '../prefooters.service';
import { mockPrefooter, PrefooterModel } from './models/prefooter.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';

describe('PrefooterController', () => {
  let controller: PrefooterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrefooterController],
      providers: [
        PrefooterService,
        {
          provide: getRepositoryToken(PrefooterCategory),
          useClass: PrefooterModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    controller = module.get<PrefooterController>(PrefooterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockPrefooter]);
  });
});
