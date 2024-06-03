import { getRepositoryToken } from '@mikro-orm/nestjs';
import { SqlEntityManager } from '@mikro-orm/postgresql';
import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryCostController } from '../delivery-cost.controller';
import { DeliveryCostService } from '../delivery-cost.service';
import { DeliveryCostLocation } from '../entities/delivery-cost-location.entity';
import { DeliveryCostLocationModel, DeliveryCostTypeModel } from './models/delivery-cost.model';

describe('DeliveryCostController', () => {
  let controller: DeliveryCostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryCostController],
      providers: [
        DeliveryCostService,
        {
          provide: getRepositoryToken(DeliveryCostLocation),
          useClass: DeliveryCostLocationModel,
        },
        {
          provide: SqlEntityManager,
          useClass: DeliveryCostLocationModel,
        },
        {
          provide: SqlEntityManager,
          useClass: DeliveryCostLocationModel,
        },
        {
          provide: SqlEntityManager,
          useClass: DeliveryCostTypeModel,
        },
      ],
    }).compile();

    controller = module.get<DeliveryCostController>(DeliveryCostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
