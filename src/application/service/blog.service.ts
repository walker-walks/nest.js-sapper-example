import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../domain/repository/blog/post.repository';
import type { Post, PostList } from '../../domain/repository/blog/model/post.model';

@Injectable()
export class PostService {

  constructor(
    private readonly postRepo: PostRepository
  ) {
  }

  find(): PostList {
    const posts = this.postRepo.find()
    return posts.map(post => ({
      title: post.title,
      slug : post.slug,
    }));
  }

  findBySlug(slug: string): Post {
    const post =  this.postRepo.findBySlug(slug);
    post.html = post.html.replace(/^\t{3}/gm, '');
    return post;
  }
  
}
