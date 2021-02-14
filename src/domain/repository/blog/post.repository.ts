import { Injectable } from '@nestjs/common';
import type { Post } from './model/post.model';
import { POSTS_DATA } from './_posts.data';

@Injectable()
export class PostRepository {

  find(): Post[] {
    return POSTS_DATA;
  }

  findBySlug(slug: string): Post {
    return POSTS_DATA.filter( p => p.slug === slug)[0];
  }

}
