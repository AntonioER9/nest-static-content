import { Test, TestingModule } from '@nestjs/testing';
import { BannerService } from '../banners.service';
import { BannerModelNull, BannerModel, mockBanner } from './models/banner.model';
import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Banner } from '../entities/banner.entity';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { NotFoundException } from '@nestjs/common';

describe('BannerService with data', () => {
  let service: BannerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BannerService,
        {
          provide: getRepositoryToken(Banner),
          useClass: BannerModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<BannerService>(BannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find with Flag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockBanner]);
  });
});

describe('BannerService without data', () => {
  let service: BannerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BannerService,
        {
          provide: getRepositoryToken(Banner),
          useClass: BannerModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<BannerService>(BannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return throw', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
