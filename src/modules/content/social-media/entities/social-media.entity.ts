import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'social_media' })
export class SocialMedia extends BaseContentEntity {
  @Property()
  @ApiProperty()
  name!: string;

  @Property()
  @ApiProperty()
  link!: string;

  @Property()
  @ApiProperty()
  icon!: string;
}
