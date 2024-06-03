import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'banners' })
export class Banner extends BaseContentEntity {
  @Property()
  @ApiProperty()
  title!: string;

  @Property()
  @ApiProperty()
  body!: string;

  @Property()
  @ApiProperty()
  button!: string;

  @Property()
  @ApiProperty()
  action!: string;

  @Property()
  @ApiProperty()
  icon!: string;

  @Property()
  @ApiProperty()
  image!: string;

  @Property()
  @ApiProperty()
  alt!: string;
}
