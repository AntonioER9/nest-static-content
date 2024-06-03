import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'rrss' })
export class Rrss extends BaseContentEntity {
  @Property()
  @ApiProperty()
  facebook?: string = '';

  @Property()
  @ApiProperty()
  twitter?: string = '';

  @Property()
  @ApiProperty()
  instagram?: string = '';

  @Property()
  @ApiProperty()
  youtube?: string = '';
}
