import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Footer } from 'modules/content/footers/entities/footer.entity';

export class FootersEasySeeder extends Seeder {
  private readonly date = new Date();

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Easy`,
      label: 'Términos y Condiciones',
      link: 'https://www.easy.cl/terminos-y-condiciones',
      flag: context.easy,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Easy`,
      label: 'Seguridad y Privacidad',
      link: '/ayuda/seguimiento-compra/politica-privacidad-y-tratamiento-datos',
      flag: context.easy,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Easy`,
      label: 'Código de ética',
      link: 'https://www.cencosud.com/cencosud/site/docs/20220602/20220602133747/codigo_etica_digital_espanol_alta.pdf',
      flag: context.easy,
    });
  }
}
