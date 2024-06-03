import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateArticleEvaluationDto {
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  isUseful!: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  contentRef!: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  response?: string;
}
