import { Test, TestingModule } from '@nestjs/testing';
import { dummyTraceId, dummyHeader, dummyFlag } from 'common/constants/constants';
import { CencoNavService } from '../cenco-nav.service';
import { cencoNavByFlag } from 'common/utils/cenco-nav';

describe('CencoNavService with data', () => {
  let service: CencoNavService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CencoNavService],
    }).compile();

    service = module.get<CencoNavService>(CencoNavService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find cenco nav by flag return data', () => {
    expect(service.findByFlag(dummyTraceId, dummyHeader)).toEqual(cencoNavByFlag[dummyFlag]);
  });
});
