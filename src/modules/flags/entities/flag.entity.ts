import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from 'common/entities/custom-base.entity';
import { DeliveryCostLocation } from 'modules/content/delivery-cost/entities/delivery-cost-location.entity';

@Entity({ tableName: 'flags' })
export class Flag extends CustomBaseEntity {
  @Property()
  @ApiProperty()
  label!: string;

  @ManyToMany(() => DeliveryCostLocation, (location) => location.flags)
  locations? = new Collection<DeliveryCostLocation>(this);
}
