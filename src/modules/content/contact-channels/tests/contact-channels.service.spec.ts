import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { ContactChannelsService } from '../contact-channels.service';
import { ContactChannel } from '../entities/contact-channel.entity';
import { ContactChannelModel, mockContactChannel, ContactChannelModelNull } from './models/contact-channel.model';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { dummyTraceId, dummyHeader } from 'common/constants/constants';

describe('ContactChannelsService', () => {
  let service: ContactChannelsService;
  let emptyService: ContactChannelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<ContactChannelsService>(ContactChannelsService);
    emptyService = emptyModule.get<ContactChannelsService>(ContactChannelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockContactChannel]);
  });

  it('findByFlag return NotFound response', async () => {
    await expect(emptyService.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow('Not Found');
  });
});
