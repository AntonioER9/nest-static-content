import { ApiProperty } from '@nestjs/swagger';
export class SearchHistoryRequestDto {
  @ApiProperty()
  public origin!: string;

  @ApiProperty()
  public resultCount!: number;

  @ApiProperty()
  public searchClick!: boolean;

  @ApiProperty()
  public searchedPhrase!: string;

  @ApiProperty()
  public urlFrom!: string;

  @ApiProperty()
  public urlToGo!: string;
}
