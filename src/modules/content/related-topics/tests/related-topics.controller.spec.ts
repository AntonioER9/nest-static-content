import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { dummySubtopic, dummyTopic } from 'common/constants/constants';
import { RelatedTopics } from 'modules/content/related-topics/entities/related-topics.entity';
import { RelatedTopicsController } from 'modules/content/related-topics/related-topics.controller';
import { RelatedTopicsService } from 'modules/content/related-topics/related-topics.service';
import { mockRelatedTopics, RelatedTopicsModel } from './models/related-topics.model';

describe('RelatedTopicsController', () => {
  let controller: RelatedTopicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelatedTopicsController],
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

    controller = module.get<RelatedTopicsController>(RelatedTopicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findBySubtopic return data', async () => {
    expect(await controller.findAllBySubtopic(dummyTopic, dummySubtopic)).toEqual([mockRelatedTopics]);
  });
});
