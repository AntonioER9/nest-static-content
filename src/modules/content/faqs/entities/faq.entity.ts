import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';
import { HelpContent } from '../../help-category/entities/help-content.entity';

@Entity({ tableName: 'faqs' })
export class Faq extends BaseContentEntity {
  @Property()
  @ApiProperty()
  question!: string;

  @Property({ columnType: 'text' })
  @ApiProperty()
  answer!: string;

  @Property()
  @ApiProperty()
  link!: string;

  @ManyToOne(() => HelpContent)
  @ApiProperty({ type: Number })
  helpContent!: HelpContent;
}
