import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { PaymentMethod } from '../entities/payment-methods.entity';
import { PaymentMethodController } from '../payment-methods.controller';
import { PaymentMethodService } from '../payment-methods.service';
import { PaymentMethodModel, mockPaymentMethod } from './models/payment-method.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';
import { SqlEntityManager } from '@mikro-orm/postgresql';

describe('PaymentMethodController', (): void => {
  let controller: PaymentMethodController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMethodController],
      providers: [
        PaymentMethodService,
        {
          provide: SqlEntityManager,
          useClass: PaymentMethodModel,
        },
        {
          provide: getRepositoryToken(PaymentMethod),
          useClass: PaymentMethodModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock'),
          },
        },
      ],
    }).compile();

    controller = module.get<PaymentMethodController>(PaymentMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockPaymentMethod]);
  });
});
