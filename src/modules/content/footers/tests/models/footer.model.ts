import { MockModel } from 'common/models/mock.model';
import { Footer } from '../../entities/footer.entity';

export const mockFooter: Footer = {
  id: 1,
  title: 'Copyright © 2020 Cencosud - Jumbo',
  label: 'Términos y Condiciones',
  link: 'https://www.jumbo.cl/institucional/terminos-condiciones',
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class FooterModel extends MockModel<Footer> {
  protected entityStub = mockFooter;
}

export class FooterModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
