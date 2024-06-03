import { getRepositoryToken } from '@mikro-orm/nestjs';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { Footer } from '../entities/footer.entity';
import { FooterService } from '../footers.service';
import { FooterModel, FooterModelNull, mockFooter } from './models/footer.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';

describe('FooterService with data', () => {
  let service: FooterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FooterService,
        {
          provide: getRepositoryToken(Footer),
          useClass: FooterModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<FooterService>(FooterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find with Flag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockFooter]);
  });
});

describe('FooterService without data', () => {
  let service: FooterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FooterService,
        {
          provide: getRepositoryToken(Footer),
          useClass: FooterModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<FooterService>(FooterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return throw', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
