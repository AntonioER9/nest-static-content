import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from 'common/entities/custom-base.entity';
import { TechnicalServiceBrand } from './technical-service-brand.entity';
import { TechnicalServiceType } from './technical-service-type.entity';

@Entity({ tableName: 'technical_services' })
export class TechnicalService extends CustomBaseEntity {
  @Property()
  @ApiProperty()
  info!: string;

  @Property()
  @ApiProperty()
  notes!: string;

  @ManyToOne()
  @ApiProperty({ type: Number })
  type!: TechnicalServiceType;

  @ManyToOne(() => TechnicalServiceBrand)
  @ApiProperty({ type: Number })
  brand!: TechnicalServiceBrand;
}
