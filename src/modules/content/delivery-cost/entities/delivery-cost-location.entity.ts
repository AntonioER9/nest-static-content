import { Collection, Entity, ManyToMany, ManyToOne, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from 'common/entities/custom-base.entity';
import { Flag } from 'modules/flags/entities/flag.entity';

@Entity()
export class DeliveryCostLocation extends CustomBaseEntity {
  @Property()
  @ApiProperty()
  name!: string;

  @ManyToOne({ nullable: true })
  @ApiProperty()
  parent!: DeliveryCostLocation | null;

  @ManyToMany(() => Flag, 'locations', { owner: true })
  @ApiProperty()
  flags = new Collection<Flag>(this);
}
