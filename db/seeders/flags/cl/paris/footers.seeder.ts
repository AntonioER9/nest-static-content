import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Footer } from 'modules/content/footers/entities/footer.entity';

export class FootersParisSeeder extends Seeder {
  private readonly date = new Date();

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Paris`,
      label: 'Términos y Condiciones',
      link: 'https://www.paris.cl/informaciones-legales/terminos-y-condiciones.html',
      flag: context.paris,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Paris`,
      label: 'Términos y Condiciones Marketplace',
      link: 'https://www.paris.cl/informaciones-legales/terminos-y-condiciones.html',
      flag: context.paris,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Paris`,
      label: 'Seguridad y Privacidad',
      link: '/ayuda/cencosud/privacidad-datos',
      flag: context.paris,
      display: false,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Paris`,
      label: 'Código de ética',
      link: 'https://www.paris.cl/on/demandware.static/-/Library-Sites-ParisSharedLibrary/es_CL/dwa2a8c54c/marketing/home/codigo-de-etica-chile-2018.pdf',
      flag: context.paris,
    });
    em.create(Footer, {
      title: `Copyright © ${this.date.getFullYear()} - Paris`,
      label: 'Bases legales de concursos',
      link: 'https://www.paris.cl/bases-legales/',
      flag: context.paris,
    });
  }
}
