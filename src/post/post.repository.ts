import { CustomRepository } from 'src/share/decorator';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';

@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
    

}
