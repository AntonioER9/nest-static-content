import { Entity, ManyToOne, Property, OneToMany, Collection } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from '../../../../common/entities/custom-base.entity';
import { Faq } from 'modules/content/faqs/entities/faq.entity';
import { HelpCategory } from './help-category.entity';

@Entity({ tableName: 'help_contents' })
export class HelpContent extends CustomBaseEntity {
  @Property()
  @ApiProperty()
  label!: string;

  @Property()
  @ApiProperty()
  reference!: string;

  @Property({ type: 'text' })
  @ApiProperty()
  content!: string;

  @Property()
  @ApiProperty()
  order!: number;

  @Property()
  @ApiProperty()
  icon!: string;

  @Property()
  @ApiProperty()
  description!: string;

  @OneToMany(() => Faq, (faq) => faq.helpContent)
  @ApiProperty()
  faqs = new Collection<Faq>(this);

  @ManyToOne(() => HelpCategory)
  @ApiProperty({ type: Number })
  helpCategory!: HelpCategory;
}
