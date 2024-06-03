import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Footer } from 'modules/content/footers/entities/footer.entity';

export class FootersSpidSeeder extends Seeder {
  private readonly date = new Date();

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Spid35`,
      label: 'Términos y Condiciones',
      link: '/ayuda/servicio-cliente/terminos-y-condiciones',
      flag: context.spid,
    });
  }
}
