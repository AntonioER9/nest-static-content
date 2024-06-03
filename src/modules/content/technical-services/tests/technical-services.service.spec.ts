import { getRepositoryToken } from '@mikro-orm/nestjs';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { TechnicalServiceBrand } from '../entities/technical-service-brand.entity';
import { TechnicalServiceService } from '../technical-services.service';
import {
  TechnicalServiceBrandModelNull,
  TechnicalServiceBrandModel,
  mockTechnicalServiceBrand,
} from './models/technical-service-brand.model';
import { dummyTraceId, dummyHeader, dummyId } from 'common/constants/constants';

describe('TechnicalServiceService with data', () => {
  let service: TechnicalServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechnicalServiceService,
        {
          provide: getRepositoryToken(TechnicalServiceBrand),
          useClass: TechnicalServiceBrandModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<TechnicalServiceService>(TechnicalServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find all brands by flag return data', async () => {
    expect(await service.findAllBrandsByFlag(dummyTraceId, dummyHeader)).toEqual([mockTechnicalServiceBrand]);
  });

  it('find one brand with technical services by flag return data', async () => {
    expect(await service.findOneBrandById(dummyTraceId, dummyId)).toEqual(mockTechnicalServiceBrand);
  });
});

describe('TechnicalServiceService without data', () => {
  let service: TechnicalServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechnicalServiceService,
        {
          provide: getRepositoryToken(TechnicalServiceBrand),
          useClass: TechnicalServiceBrandModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
      ],
    }).compile();

    service = module.get<TechnicalServiceService>(TechnicalServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAllBrandsByFlag return throw', async () => {
    await expect(service.findAllBrandsByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });

  it('findOneBrandByFlag return throw', async () => {
    await expect(service.findOneBrandById(dummyTraceId, dummyId)).rejects.toThrow(new NotFoundException());
  });
});
