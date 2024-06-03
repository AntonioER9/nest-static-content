import { getRepositoryToken } from '@mikro-orm/nestjs';
import { SqlEntityManager } from '@mikro-orm/postgresql';
import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryCostService } from '../delivery-cost.service';
import { DeliveryCostLocation } from '../entities/delivery-cost-location.entity';
import {
  DeliveryCostLocationModel,
  DeliveryCostLocationModelNull,
  DeliveryCostTypeModel,
  DeliveryCostTypeModelNull,
  mockDeliveryCostLocation,
  mockTypeResponse,
} from './models/delivery-cost.model';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('DeliveryCostService', () => {
  let service: DeliveryCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<DeliveryCostService>(DeliveryCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getLocations return data', async () => {
    await expect(service.getLocations(dummyTraceId, dummyHeader)).resolves.toEqual([
      { ...mockDeliveryCostLocation, children: [mockDeliveryCostLocation] },
    ]);
  });

  it('should getTypes return data', async () => {
    await expect(service.getTypes(dummyTraceId, dummyHeader, 334)).resolves.toEqual([mockTypeResponse]);
  });
});

describe('DeliveryCostService without data', () => {
  let service: DeliveryCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeliveryCostService,
        {
          provide: getRepositoryToken(DeliveryCostLocation),
          useClass: DeliveryCostLocationModelNull,
        },
        {
          provide: SqlEntityManager,
          useClass: DeliveryCostLocationModelNull,
        },
        {
          provide: SqlEntityManager,
          useClass: DeliveryCostTypeModelNull,
        },
      ],
    }).compile();

    service = module.get<DeliveryCostService>(DeliveryCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getLocations throw NotFound', async () => {
    await expect(service.getLocations(dummyTraceId, dummyHeader)).rejects.toThrow(
      new NotFoundException('Parent not found'),
    );
  });

  it('should getTypes throw BadRequest', async () => {
    await expect(service.getTypes(dummyTraceId, dummyHeader, undefined)).rejects.toThrow(new BadRequestException());
  });

  it('should getTypes return empty', async () => {
    await expect(service.getTypes(dummyTraceId, dummyHeader, 123123132)).resolves.toEqual([]);
  });
});
