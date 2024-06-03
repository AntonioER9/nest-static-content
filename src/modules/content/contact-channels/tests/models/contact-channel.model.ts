import { MockModel } from 'common/models/mock.model';
import { ContactChannel } from '../../entities/contact-channel.entity';

export const mockContactChannel: ContactChannel = {
  id: 1,
  icon: 'contacto',
  title: 'Contáctanos',
  buttonLabel: 'Ir al Formulario',
  actionType: 'redirect-int',
  reference: '/ayuda/contactanos',
  order: 1,
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class ContactChannelModel extends MockModel<ContactChannel> {
  protected entityStub = mockContactChannel;
}

export class ContactChannelModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
