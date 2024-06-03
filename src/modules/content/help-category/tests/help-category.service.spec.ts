import { getRepositoryToken } from '@mikro-orm/nestjs';
import { SqlEntityManager } from '@mikro-orm/postgresql';
import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from '../../../flags/tests/models/flag.model';
import { HelpCategory } from '../entities/help-category.entity';
import { HelpCategoryService } from '../help-category.service';
import { HelpCategoryModel, HelpCategoryModelNull, mockHelpCategory } from './models/help-category.model';

describe('HelpCategoryService', () => {
  let service: HelpCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HelpCategoryService,
        {
          provide: getRepositoryToken(HelpCategory),
          useClass: HelpCategoryModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
        {
          provide: SqlEntityManager,
          useClass: HelpCategoryModel,
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock'),
          },
        },
      ],
    }).compile();

    service = module.get<HelpCategoryService>(HelpCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockHelpCategory]);
  });

  it('findWithFaqsByFlag no return data', async () => {
    expect(await service.findWithFaqsByFlag(dummyTraceId, dummyHeader)).toEqual([]);
  });

  it('findFilteredByFlag no return data', async () => {
    expect(await service.findFilteredByFlag(dummyTraceId, dummyHeader)).toEqual([]);
  });
});

describe('HelpCategoryService without data', () => {
  let service: HelpCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HelpCategoryService,
        {
          provide: getRepositoryToken(HelpCategory),
          useClass: HelpCategoryModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
        {
          provide: SqlEntityManager,
          useClass: HelpCategoryModelNull,
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock'),
          },
        },
      ],
    }).compile();

    service = module.get<HelpCategoryService>(HelpCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should findByFlag return NotFound', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });

  it('should findWithFaqsByFlag return NotFound', async () => {
    await expect(service.findWithFaqsByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });

  it('should findFilteredByFlag return NotFound', async () => {
    await expect(service.findFilteredByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
