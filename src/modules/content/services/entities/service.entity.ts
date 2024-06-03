import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'service' })
export class Service extends BaseContentEntity {
  @Property()
  @ApiProperty()
  icon!: string;

  @Property()
  @ApiProperty()
  label!: string;

  @Property()
  @ApiProperty()
  label_mobile!: string;

  @Property()
  @ApiProperty()
  actionLabel!: string;

  @Property()
  @ApiProperty()
  invitedReference!: string;

  @Property()
  @ApiProperty()
  reference!: string;
}
