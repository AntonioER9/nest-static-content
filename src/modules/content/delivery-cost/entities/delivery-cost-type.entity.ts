import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from 'common/entities/custom-base.entity';
import { Flag } from 'modules/flags/entities/flag.entity';

@Entity()
export class DeliveryCostType extends CustomBaseEntity {
  @Property()
  @ApiProperty()
  name!: string;

  @Property()
  @ApiProperty()
  description!: string;

  @ManyToOne()
  @ApiProperty()
  flag!: Flag;

  @Property({ nullable: true })
  @ApiProperty()
  icon?: string;

  @Property({ nullable: true })
  @ApiProperty()
  package?: string;

  @Property({ nullable: true })
  @ApiProperty()
  weight?: string;

  @Property({ nullable: true })
  @ApiProperty()
  data?: string;
}
