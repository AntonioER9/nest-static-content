import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'footers' })
export class Footer extends BaseContentEntity {
  @Property()
  @ApiProperty()
  title!: string;

  @Property()
  @ApiProperty()
  label!: string;

  @Property()
  @ApiProperty()
  link!: string;
}
