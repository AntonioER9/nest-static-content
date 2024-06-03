import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RelatedTopics } from 'modules/content/related-topics/entities/related-topics.entity';

export class RelatedTopicsParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(RelatedTopics, {
      title: `Reembolsos`,
      reference: 'https://ayuda.paris.cl/ayuda/servicios-postventa/reembolso-dinero',
      flag: context.paris,
      topicId: 1,
      subtopicId: 5,
    });

    em.create(RelatedTopics, {
      title: `Garantía`,
      reference: 'https://ayuda.paris.cl/ayuda/garantia-de-producto/garantia-minima-legal',
      flag: context.paris,
      topicId: 1,
      subtopicId: 5,
    });

    em.create(RelatedTopics, {
      title: `Cancelación de compra`,
      reference: 'https://ayuda.paris.cl/ayuda/servicios-postventa/cancelacion-de-compra',
      flag: context.paris,
      topicId: 1,
      subtopicId: 5,
    });

    em.create(RelatedTopics, {
      title: `Reembolsos`,
      reference: 'https://ayuda.paris.cl/ayuda/servicios-postventa/reembolso-dinero',
      flag: context.paris,
      topicId: 1,
      subtopicId: 2,
    });

    em.create(RelatedTopics, {
      title: `Garantía`,
      reference: 'https://ayuda.paris.cl/ayuda/garantia-de-producto/garantia-minima-legal',
      flag: context.paris,
      topicId: 1,
      subtopicId: 2,
    });

    em.create(RelatedTopics, {
      title: `Cancelación de compra`,
      reference: 'https://ayuda.paris.cl/ayuda/servicios-postventa/cancelacion-de-compra',
      flag: context.paris,
      topicId: 1,
      subtopicId: 2,
    });
  }
}
