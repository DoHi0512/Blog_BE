import { Body, Post, Controller, Get, Param } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('post')
export default class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  create(@Body() createPostDTO: CreatePostDTO) {
    console.log(createPostDTO)
    this.postService.create(createPostDTO);
  }
}
