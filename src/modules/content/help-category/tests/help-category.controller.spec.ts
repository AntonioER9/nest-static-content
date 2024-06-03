import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { HelpCategoryController } from '../help-category.controller';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { ConfigService } from '@nestjs/config';
import { SqlEntityManager } from '@mikro-orm/postgresql';
import { HelpCategoryService } from '../help-category.service';
import { HelpCategoryModel, HelpCategoryModelNull, mockHelpCategory } from './models/help-category.model';
import { HelpCategory } from '../entities/help-category.entity';

describe('HelpCategoryController', () => {
  let controller: HelpCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpCategoryController],
      providers: [
        HelpCategoryService,
        {
          provide: getRepositoryToken(HelpCategory),
          useClass: HelpCategoryModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
        {
          provide: SqlEntityManager,
          useClass: HelpCategoryModelNull,
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock'),
          },
        },
      ],
    }).compile();

    controller = module.get<HelpCategoryController>(HelpCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockHelpCategory]);
  });

  it('should findFilteredByFlag no return data', async () => {
    expect(await controller.findFilteredByFlag(dummyHeader, dummyTraceId)).toEqual([]);
  });
});
