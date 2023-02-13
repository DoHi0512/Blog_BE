import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {}
