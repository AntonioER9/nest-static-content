import { getRepositoryToken } from '@mikro-orm/nestjs';
import { SqlEntityManager } from '@mikro-orm/postgresql';
import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from '../../../flags/tests/models/flag.model';
import { PaymentMethod } from '../entities/payment-methods.entity';
import { PaymentMethodService } from '../payment-methods.service';
import { PaymentMethodModel, PaymentMethodModelNull, mockPaymentMethod } from './models/payment-method.model';

describe('PaymentMethodService', () => {
  let service: PaymentMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentMethodService,
        {
          provide: getRepositoryToken(PaymentMethod),
          useClass: PaymentMethodModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
        {
          provide: SqlEntityManager,
          useClass: PaymentMethodModel,
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock'),
          },
        },
      ],
    }).compile();

    service = module.get<PaymentMethodService>(PaymentMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByFlag return data', async () => {
    expect(await service.findByFlag(dummyTraceId, dummyHeader)).toEqual([mockPaymentMethod]);
  });
});

describe('PaymentMethodService without data', () => {
  let service: PaymentMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentMethodService,
        {
          provide: getRepositoryToken(PaymentMethod),
          useClass: PaymentMethodModelNull,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
        {
          provide: SqlEntityManager,
          useClass: PaymentMethodModelNull,
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock'),
          },
        },
      ],
    }).compile();

    service = module.get<PaymentMethodService>(PaymentMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should findByFlag return NotFound', async () => {
    await expect(service.findByFlag(dummyTraceId, dummyHeader)).rejects.toThrow(new NotFoundException());
  });
});
