import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity()
export class ArticleEvaluationOption extends BaseContentEntity {
  @Property()
  @ApiProperty()
  optionText!: string;
}
