import { Test, TestingModule } from '@nestjs/testing';
import { dummyTraceId, dummyHeader, dummyFlag } from 'common/constants/constants';
import { CencoNavController } from '../cenco-nav.controller';
import { CencoNavService } from '../cenco-nav.service';
import { cencoNavByFlag } from 'common/utils/cenco-nav';

describe('CencoNavController', () => {
  let controller: CencoNavController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CencoNavController],
      providers: [CencoNavService],
    }).compile();

    controller = module.get<CencoNavController>(CencoNavController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findByFlag return data', () => {
    expect(controller.findByFlag(dummyHeader, dummyTraceId)).toEqual(cencoNavByFlag[dummyFlag]);
  });
});
