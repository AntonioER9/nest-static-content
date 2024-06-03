import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { TechnicalService } from './technical-service.entity';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';

@Entity({ tableName: 'technical_services_brands' })
export class TechnicalServiceBrand extends BaseContentEntity {
  @Property()
  @ApiProperty()
  name!: string;

  @OneToMany(() => TechnicalService, (technicalService) => technicalService.brand)
  @ApiProperty()
  technicalServices? = new Collection<TechnicalService>(this);
}
