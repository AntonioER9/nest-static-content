import { getRepositoryToken } from '@mikro-orm/nestjs';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from '../../../flags/entities/flag.entity';
import { FlagModel } from '../../../flags/tests/models/flag.model';
import { InfoMessage } from '../entities/info-message.entity';
import { InfoMessagesService } from '../info-messages.service';
import { InfoMessageModel, InfoMessageModelNull, mockInfoMessage } from './models/info-message.model';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';

describe('MessageInfoService', () => {
  let service: InfoMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<InfoMessagesService>(InfoMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual(mockInfoMessage);
  });
});

describe('MessageInfoService without data', () => {
  let service: InfoMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InfoMessagesService,
        {
          provide: getRepositoryToken(InfoMessage),
          useClass: InfoMessageModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<InfoMessagesService>(InfoMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should findByFlag return NotFound', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
