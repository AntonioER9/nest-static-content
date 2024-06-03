import { MockModel } from 'common/models/mock.model';
import { Banner } from '../../entities/banner.entity';

export const mockBanner: Banner = {
  id: 1,
  title: '¿Sabes cómo generar una solicitud?',
  body: 'Aprende cómo autogestionar tus casos y ahorrar tiempo.',
  button: 'Descubrir más',
  action: '/ayuda/servicios-postventa/como-ingresar-solicitud',
  icon: 'icons/boot.svg',
  image: '/images/banner-img.svg',
  alt: 'image',
  order: 1,
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class BannerModel extends MockModel<Banner> {
  protected entityStub = mockBanner;
}

export class BannerModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
