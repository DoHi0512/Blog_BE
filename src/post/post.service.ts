import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
import {Repository} from "typeorm"
@Injectable()
export class PostService {
  constructor(
    // @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}
  create(createPostDTO: CreatePostDTO) {
    let newPost = new PostEntity();
    newPost.content = createPostDTO.content;
    newPost.title = createPostDTO.title;
    this.postRepository.save(newPost);
  }
}
