import { HelpContent } from './help-content.entity';
import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from '../../entities/base-content.entity';

@Entity({ tableName: 'help_categories' })
export class HelpCategory extends BaseContentEntity {
  @Property()
  @ApiProperty()
  icon!: string;

  @Property()
  @ApiProperty()
  title!: string;

  @Property()
  @ApiProperty()
  reference!: string;

  @OneToMany(() => HelpContent, (helpContent) => helpContent.helpCategory)
  @ApiProperty()
  helpContents = new Collection<HelpContent>(this);
}
