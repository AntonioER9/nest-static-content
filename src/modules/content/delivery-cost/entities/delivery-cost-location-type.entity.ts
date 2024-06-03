import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { DeliveryCostLocation } from './delivery-cost-location.entity';
import { DeliveryCostType } from './delivery-cost-type.entity';

@Entity()
export class DeliveryCostLocationType {
  @PrimaryKey()
  id!: number;

  @ManyToOne()
  location!: DeliveryCostLocation;

  @ManyToOne()
  type!: DeliveryCostType;

  @Property()
  price!: number;
}
