import { TestingModule, Test } from '@nestjs/testing';
import { ContactChannelsController } from '../contact-channels.controller';
import { ContactChannelsService } from '../contact-channels.service';
import { getRepositoryToken } from '@mikro-orm/nestjs';
import { ContactChannel } from '../entities/contact-channel.entity';
import { ContactChannelModel, mockContactChannel, ContactChannelModelNull } from './models/contact-channel.model';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { Flag } from 'modules/flags/entities/flag.entity';

describe('ContactChannelsController', () => {
  let controller: ContactChannelsController;
  let emptyController: ContactChannelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactChannelsController],
      providers: [
        ContactChannelsService,
        {
          provide: getRepositoryToken(ContactChannel),
          useClass: ContactChannelModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    const emptyModule: TestingModule = await Test.createTestingModule({
      controllers: [ContactChannelsController],
      providers: [
        ContactChannelsService,
        {
          provide: getRepositoryToken(ContactChannel),
          useClass: ContactChannelModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    controller = module.get<ContactChannelsController>(ContactChannelsController);
    emptyController = emptyModule.get<ContactChannelsController>(ContactChannelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockContactChannel]);
  });

  it('should findAllByFlag return NotFound response', async () => {
    await expect(emptyController.findAllByFlag(dummyHeader, dummyTraceId)).rejects.toThrow('Not Found');
  });
});
