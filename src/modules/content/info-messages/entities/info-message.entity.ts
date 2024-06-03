import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'info_messages' })
export class InfoMessage extends BaseContentEntity {
  @Property()
  @ApiProperty()
  message!: string;
}
