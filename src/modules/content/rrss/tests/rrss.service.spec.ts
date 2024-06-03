import { getRepositoryToken } from '@mikro-orm/nestjs';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { mockRrss, RrssModel, RrssModelNull } from './models/rrss.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';
import { RrssService } from '../rrss.service';
import { Rrss } from '../entities/rrss.entity';

describe('RrssService with data', () => {
  let service: RrssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<RrssService>(RrssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find with Flag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual(mockRrss);
  });
});

describe('RrssService without data', () => {
  let service: RrssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RrssService,
        {
          provide: getRepositoryToken(Rrss),
          useClass: RrssModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<RrssService>(RrssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return throw', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
