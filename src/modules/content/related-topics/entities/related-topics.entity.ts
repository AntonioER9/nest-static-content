import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'related_topics' })
export class RelatedTopics extends BaseContentEntity {
  @Property()
  @ApiProperty()
  title!: string;

  @Property()
  @ApiProperty()
  reference!: string;

  @Property()
  @ApiProperty()
  topicId!: number;

  @Property()
  @ApiProperty()
  subtopicId!: number;
}
