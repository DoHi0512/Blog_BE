import { IsString } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  readonly content: string;

  @IsString()
  readonly title: string;
  //   tag: string[];
}
