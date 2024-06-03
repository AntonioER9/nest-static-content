import { Collection } from '@mikro-orm/core';
import { Flag } from 'modules/flags/entities/flag.entity';
import { DeliveryCostLocation } from '../entities/delivery-cost-location.entity';

export class DeliveryCostLocationDto {
  children!: DeliveryCostLocation[];
  name!: string;
  parent!: DeliveryCostLocation | null;
  flags!: Collection<Flag>;
  id!: number;
  display?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
