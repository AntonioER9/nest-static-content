import { FindOptions } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { CDALogger } from 'common/loggers/cda.logger';
import { Flag } from 'modules/flags/entities/flag.entity';
import { HelpCategory } from './entities/help-category.entity';
import { EntityRepository, EntityManager } from '@mikro-orm/postgresql';
import { ConfigService } from '@nestjs/config';
import { formatMessagesContent } from 'common/utils/format-messages';

@Injectable()
export class HelpCategoryService {
  private readonly logger: CDALogger = new CDALogger(HelpCategoryService.name);
  private readonly findOptions: FindOptions<HelpCategory, 'helpContents'> = {
    fields: [
      'icon',
      'title',
      'reference',
      { helpContents: ['label', 'reference', 'order', 'content', 'display', 'description', 'icon'] },
    ],
    populate: ['helpContents'],
    populateWhere: { helpContents: { display: true } },
    orderBy: { id: 'ASC', helpContents: { order: 'ASC' } },
  };

  constructor(
    private readonly em: EntityManager,
    @InjectRepository(HelpCategory)
    private readonly helpCategoryRepository: EntityRepository<HelpCategory>,
    private configService: ConfigService,
  ) {}
  private parisUrlMisCompras: string = this.configService.get('paris.urlMisCompras') ?? ('' as string);
  private parisUrlHelpForm: string = this.configService.get('paris.urlHelpForm') ?? ('' as string);

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    const helpCategories = await this.helpCategoryRepository.find(
      { flag, display: true, helpContents: { display: true } },
      this.findOptions,
    );

    if (helpCategories.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    } else {
      this.formatHelpContent(helpCategories);
    }
    return helpCategories;
  }

  async findFilteredByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    const helpCategories = await this.helpCategoryRepository.find(
      { flag, display: true },
      {
        fields: [
          'icon',
          'title',
          'reference',
          { helpContents: ['label', 'reference', 'order', 'display', 'description', 'icon'] },
        ],
        populate: ['helpContents'],
        populateWhere: { helpContents: { display: true, description: { $re: '([A-Z])' } } },
        orderBy: { id: 'ASC', helpContents: { order: 'ASC' } },
      },
    );

    if (helpCategories.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    } else {
      return this.removeEmptyHelpCategories(helpCategories);
    }
  }

  async findWithFaqsByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    const helpCategories = await this.em.find(
      HelpCategory,
      { flag, display: true },
      {
        fields: ['icon', 'title', { helpContents: ['label', 'order', { faqs: ['answer', 'question', 'order'] }] }],
        populateWhere: { helpContents: { display: true, faqs: { question: { $re: '([A-Z])' }, display: true } } },
        orderBy: { id: 'ASC', helpContents: { order: 'ASC', faqs: { order: 'ASC' } } },
      },
    );

    if (helpCategories.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    } else {
      return this.removeEmptyHelpCategories(helpCategories);
    }
  }

  removeEmptyHelpCategories = (helpCategories: HelpCategory[]) =>
    helpCategories.filter((category) => category.helpContents.length > 0);

  formatHelpContent(helpCategories: HelpCategory[]) {
    for (const helpCategory of helpCategories) {
      const helpContents = helpCategory.helpContents;
      for (const helpContent of helpContents) {
        helpContent.content = formatMessagesContent(
          helpContent.content,
          this.parisUrlMisCompras,
          this.parisUrlHelpForm,
        );
      }
    }
  }
}
