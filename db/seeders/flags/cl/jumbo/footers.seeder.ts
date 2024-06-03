import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Footer } from 'modules/content/footers/entities/footer.entity';

export class FootersJumboSeeder extends Seeder {
  private readonly date = new Date();

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Jumbo`,
      label: 'Términos y Condiciones',
      link: 'https://www.jumbo.cl/institucional/terminos-condiciones',
      flag: context.jumbo,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Jumbo`,
      label: 'Seguridad y Privacidad',
      link: 'https://www.jumbo.cl/institucional/seguridad-privacidad',
      flag: context.jumbo,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Jumbo`,
      label: 'Código de ética',
      link: 'https://www.cencosud.com/cencosud/site/docs/20220602/20220602133747/codigo_etica_digital_espanol_alta.pdf',
      flag: context.jumbo,
    });
  }
}
