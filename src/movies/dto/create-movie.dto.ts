import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly director: string;

  @IsNumber()
  readonly year: number;
}
