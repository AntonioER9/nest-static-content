import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { Footer } from '../entities/footer.entity';
import { FooterController } from '../footers.controller';
import { FooterService } from '../footers.service';
import { FooterModel, mockFooter } from './models/footer.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';

describe('FooterController', () => {
  let controller: FooterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FooterController],
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

    controller = module.get<FooterController>(FooterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockFooter]);
  });
});
