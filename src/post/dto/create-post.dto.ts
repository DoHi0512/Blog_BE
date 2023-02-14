import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  readonly content: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly image: string;

  @IsArray()
  readonly tag: string[];
}
