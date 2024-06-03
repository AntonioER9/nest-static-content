import { getRepositoryToken } from '@mikro-orm/nestjs';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { dummyTraceId, dummyHeader } from 'common/constants/constants';
import { RelatedTopics } from 'modules/content/related-topics/entities/related-topics.entity';
import { RelatedTopicsService } from 'modules/content/related-topics/related-topics.service';
import { mockRelatedTopics, RelatedTopicsModel, RelatedTopicsModelNull } from './models/related-topics.model';

describe('RelatedTopicsService with data', () => {
  let service: RelatedTopicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RelatedTopicsService,
        {
          provide: getRepositoryToken(RelatedTopics),
          useClass: RelatedTopicsModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<RelatedTopicsService>(RelatedTopicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find with Flag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockRelatedTopics]);
  });
});

describe('RelatedTopicsService without data', () => {
  let service: RelatedTopicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RelatedTopicsService,
        {
          provide: getRepositoryToken(RelatedTopics),
          useClass: RelatedTopicsModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<RelatedTopicsService>(RelatedTopicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return throw', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
