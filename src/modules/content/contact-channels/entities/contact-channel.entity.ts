import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'contact_channels' })
export class ContactChannel extends BaseContentEntity {
  @Property()
  @ApiProperty()
  icon!: string;

  @Property()
  @ApiProperty()
  title!: string;

  @Property()
  @ApiProperty()
  buttonLabel!: string;

  @Property()
  @ApiProperty()
  actionType!: string;

  @Property()
  @ApiProperty()
  reference!: string;
}
