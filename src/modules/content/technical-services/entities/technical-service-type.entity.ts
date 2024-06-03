import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from 'common/entities/custom-base.entity';

@Entity({ tableName: 'technical_services_types' })
export class TechnicalServiceType extends CustomBaseEntity {
  @Property()
  @ApiProperty()
  name!: string;

  @Property()
  @ApiProperty()
  order!: number;
}
