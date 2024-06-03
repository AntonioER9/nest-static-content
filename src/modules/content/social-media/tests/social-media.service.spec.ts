import { getRepositoryToken } from '@mikro-orm/nestjs';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { mockSocialMedia, SocialMediaModel, SocialMediaModelNull } from './models/rrss.model';
import { dummyTraceId, dummyHeader } from 'common/constants/constants';
import { SocialMediaService } from 'modules/content/social-media/social-media.service';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

describe('SocialMediaService with data', () => {
  let service: SocialMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SocialMediaService,
        {
          provide: getRepositoryToken(SocialMedia),
          useClass: SocialMediaModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<SocialMediaService>(SocialMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find with Flag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockSocialMedia]);
  });
});

describe('SocialMediaService without data', () => {
  let service: SocialMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SocialMediaService,
        {
          provide: getRepositoryToken(SocialMedia),
          useClass: SocialMediaModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<SocialMediaService>(SocialMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return throw', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
