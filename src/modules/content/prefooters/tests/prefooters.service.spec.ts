import { getRepositoryToken } from '@mikro-orm/nestjs';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { PrefooterCategory } from '../entities/prefooter-category.entity';
import { PrefooterService } from '../prefooters.service';
import { mockPrefooter, PrefooterModel, PrefooterModelNull } from './models/prefooter.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';

describe('PrefooterService with data', () => {
  let service: PrefooterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<PrefooterService>(PrefooterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find with Flag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockPrefooter]);
  });
});

describe('PrefooterService without data', () => {
  let service: PrefooterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrefooterService,
        {
          provide: getRepositoryToken(PrefooterCategory),
          useClass: PrefooterModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<PrefooterService>(PrefooterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return throw', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
