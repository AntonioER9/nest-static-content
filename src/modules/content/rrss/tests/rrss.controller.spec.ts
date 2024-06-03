import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { mockRrss, RrssModel } from './models/rrss.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';
import { RrssController } from '../rrss.controller';
import { RrssService } from '../rrss.service';
import { Rrss } from '../entities/rrss.entity';

describe('RrssController', () => {
  let controller: RrssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RrssController],
      providers: [
        RrssService,
        {
          provide: getRepositoryToken(Rrss),
          useClass: RrssModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    controller = module.get<RrssController>(RrssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual(mockRrss);
  });
});
