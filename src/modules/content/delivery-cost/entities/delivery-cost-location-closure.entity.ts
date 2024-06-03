import { Entity, ManyToOne } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { DeliveryCostLocation } from './delivery-cost-location.entity';

@Entity()
export class DeliveryCostLocationClosure {
  @ManyToOne(() => DeliveryCostLocation, { primary: true, mapToPk: true })
  @ApiProperty()
  ancestor!: number;

  @ManyToOne(() => DeliveryCostLocation, { primary: true, mapToPk: true })
  @ApiProperty()
  descendant!: number;
}
