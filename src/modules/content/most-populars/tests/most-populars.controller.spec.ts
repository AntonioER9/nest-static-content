import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { MostPopular } from '../entities/most-populars.entity';
import { MostPopularsController } from '../most-populars.controller';
import { MostPopularsService } from '../most-populars.service';
import { MostPopularModel, mockMostPopular } from './models/most-popular.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';

describe('MostPopularsController', () => {
  let controller: MostPopularsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MostPopularsController],
      providers: [
        MostPopularsService,
        {
          provide: getRepositoryToken(MostPopular),
          useClass: MostPopularModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    controller = module.get<MostPopularsController>(MostPopularsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockMostPopular]);
  });
});
