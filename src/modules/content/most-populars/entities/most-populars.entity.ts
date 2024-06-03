import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'most_populars' })
export class MostPopular extends BaseContentEntity {
  @Property()
  @ApiProperty()
  label!: string;

  @Property()
  @ApiProperty()
  link!: string;

  @Property()
  @ApiProperty()
  reference!: string;
}
