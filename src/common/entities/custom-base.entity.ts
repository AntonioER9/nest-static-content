import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ abstract: true })
export abstract class CustomBaseEntity {
  @PrimaryKey()
  @ApiProperty()
  id!: number;

  @Property({ hidden: true, nullable: false })
  @ApiProperty()
  display?: boolean = true;

  @Property({ hidden: true })
  @ApiProperty()
  createdAt?: Date = new Date();

  @Property({ hidden: true, onUpdate: () => new Date() })
  @ApiProperty()
  updatedAt?: Date = new Date();
}
