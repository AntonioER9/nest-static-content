import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { MostPopular } from '../entities/most-populars.entity';
import { MostPopularsService } from '../most-populars.service';
import { MostPopularModel, mockMostPopular, MostPopularModelNull } from './models/most-popular.model';
import { FlagModel } from '../../../flags/tests/models/flag.model';
import { NotFoundException } from '@nestjs/common';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';

describe('MostPopularsService', () => {
  let service: MostPopularsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<MostPopularsService>(MostPopularsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockMostPopular]);
  });
});

describe('MostPopularsService without data', () => {
  let service: MostPopularsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MostPopularsService,
        {
          provide: getRepositoryToken(MostPopular),
          useClass: MostPopularModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<MostPopularsService>(MostPopularsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should findByFlag return NotFound', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
