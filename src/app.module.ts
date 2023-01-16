import { Module } from '@nestjs/common';
import { BlogController } from './blog/blog.controller';
import { PostController } from './post/post.controller';
import { CommentController } from './comment/comment.controller';
import { UserController } from './user/user.controller';


@Module({
  imports: [],
  controllers: [BlogController, PostController, CommentController, UserController],
  providers: [],
})
export class AppModule {}
