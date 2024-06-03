import { ManyToOne, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from 'common/entities/custom-base.entity';
import { Flag } from '../../flags/entities/flag.entity';

export abstract class BaseContentEntity extends CustomBaseEntity {
  @ManyToOne()
  @ApiProperty({ type: Number })
  flag!: Flag;

  @Property()
  @ApiProperty()
  order?: number = 0;
}
