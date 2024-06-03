import { MockModel } from 'common/models/mock.model';
import { MostPopular } from '../../entities/most-populars.entity';

export const mockMostPopular: MostPopular = {
  id: 1,
  label: 'Problemas con mi pedido',
  link: '/ayuda/problemas-pedido/producto-cobrado-no-enviado',
  reference: '/ayuda/problemas-pedido/producto-cobrado-no-enviado',
  flag: {
    id: 1,
    label: 'jumbo',
  },
  order: 1,
};

export class MostPopularModel extends MockModel<MostPopular> {
  protected entityStub = mockMostPopular;
}

export class MostPopularModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
