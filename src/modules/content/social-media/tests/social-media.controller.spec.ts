import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { mockSocialMedia, SocialMediaModel } from './models/rrss.model';
import { dummyTraceId, dummyHeader } from 'common/constants/constants';
import { SocialMediaController } from 'modules/content/social-media/social-media.controller';
import { SocialMediaService } from 'modules/content/social-media/social-media.service';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

describe('SocialMediaController', () => {
  let controller: SocialMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialMediaController],
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

    controller = module.get<SocialMediaController>(SocialMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockSocialMedia]);
  });
});
