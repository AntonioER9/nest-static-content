import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CustomBaseEntity } from 'common/entities/custom-base.entity';
import { PrefooterCategory } from './prefooter-category.entity';

@Entity()
export class PrefooterSubcategory extends CustomBaseEntity {
  @ManyToOne(() => PrefooterCategory)
  @ApiProperty()
  titleCategory!: PrefooterCategory;

  @Property()
  @ApiProperty()
  label!: string;

  @Property()
  @ApiProperty()
  path!: string;

  @Property()
  @ApiProperty()
  order!: number;
}
