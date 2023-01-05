import { IsNotEmpty, IsString } from 'class-validator';

export class NameQueryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
