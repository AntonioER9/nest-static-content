import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import { ArticleEvaluationOption } from 'modules/content/article-evaluation/entities/article-evaluation-option.entity';

export class ArticleEvaluationOptionWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(ArticleEvaluationOption, {
      optionText: 'No tiene la información que necesito',
      order: 1,
      flag: context.wong,
    });

    em.create(ArticleEvaluationOption, {
      optionText: 'La información es confusa o difícil de entender',
      order: 2,
      flag: context.wong,
    });

    em.create(ArticleEvaluationOption, {
      optionText: 'Este artículo no se relacionaba con lo que buscaba',
      order: 3,
      flag: context.wong,
    });

    em.create(ArticleEvaluationOption, {
      optionText: 'Tengo que leer demasiado',
      order: 4,
      flag: context.wong,
    });

    em.create(ArticleEvaluationOption, {
      optionText: 'Otro',
      order: 5,
      flag: context.wong,
    });
  }
}
