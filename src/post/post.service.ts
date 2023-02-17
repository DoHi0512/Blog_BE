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
    if (createPostDTO.image === '') {
      newPost.image =
        'https://tecoble.techcourse.co.kr/static/348a6c1ea3a4fa8b6990e3e3bf4e8490/8ac6f/sample2.png';
    } else newPost.image = createPostDTO.image;
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
