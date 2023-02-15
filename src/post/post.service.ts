import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}
  create(createPostDTO: CreatePostDTO) {
    let newPost = new PostEntity();
    newPost.content = createPostDTO.content;
    newPost.title = createPostDTO.title;
    newPost.image = createPostDTO.image;
    newPost.tag = createPostDTO.tag;
    this.postRepository.save(newPost);
  }

  getAll() {
    return this.postRepository.find();
  }

  getById(id: number) {
    return this.postRepository.findOneById(id);
  }
}
