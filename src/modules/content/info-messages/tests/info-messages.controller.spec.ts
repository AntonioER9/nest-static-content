import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from '../../../flags/entities/flag.entity';
import { FlagModel } from '../../../flags/tests/models/flag.model';
import { InfoMessage } from '../entities/info-message.entity';
import { InfoMessagesController } from '../info-messages.controller';
import { InfoMessagesService } from '../info-messages.service';
import { InfoMessageModel, mockInfoMessage } from './models/info-message.model';
import { dummyTraceId, dummyHeader } from 'common/constants/constants';

describe('MessageInfoController', () => {
  let controller: InfoMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoMessagesController],
      providers: [
        InfoMessagesService,
        {
          provide: getRepositoryToken(InfoMessage),
          useClass: InfoMessageModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    controller = module.get<InfoMessagesController>(InfoMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findOneByFlag(dummyHeader, dummyTraceId)).toEqual(mockInfoMessage);
  });
});
