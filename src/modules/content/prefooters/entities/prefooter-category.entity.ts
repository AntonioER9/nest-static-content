import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseContentEntity } from 'modules/content/entities/base-content.entity';
import { PrefooterSubcategory } from './prefooter-subcategory.entity';

@Entity()
export class PrefooterCategory extends BaseContentEntity {
  @Property()
  @ApiProperty()
  title!: string;

  @OneToMany('PrefooterSubcategory', 'titleCategory')
  links = new Collection<PrefooterSubcategory>(this);
}
