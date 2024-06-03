import { Collection } from '@mikro-orm/core';
import { MockModel } from 'common/models/mock.model';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';
import { HelpCategory } from '../../entities/help-category.entity';
import { Faq } from 'modules/content/faqs/entities/faq.entity';

export const mockHelpContent: HelpContent[] = [
  {
    id: 1,
    content: 'prueba',
    label: 'prueba',
    order: 1,
    reference: 'prueba',
    description: 'prueba',
    icon: 'prueba',
    faqs: new Collection<Faq>([]),
    helpCategory: {
      id: 1,
      icon: 'iconns/cards/servicesPostSales.svg',
      reference: '/ayuda/servicios-postventa',
      title: '',
      flag: {
        id: 0,
        label: 'paris',
      },
      helpContents: new Collection<HelpContent>([]),
    },
  },
];

export const mockHelpCategory: HelpCategory = {
  id: 1,
  icon: 'iconns/cards/servicesPostSales.svg',
  reference: '/ayuda/servicios-postventa',
  title: '',
  flag: {
    id: 0,
    label: 'paris',
  },
  helpContents: new Collection<HelpContent>(mockHelpContent),
};

export class HelpCategoryModel extends MockModel<HelpCategory> {
  protected entityStub = mockHelpCategory;
}

export class HelpCategoryModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
