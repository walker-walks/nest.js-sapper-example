import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from '../../application/service/blog.service';
import type { Post, PostList } from '../../domain/repository/blog/model/post.model';


@Controller('posts')
export class PostController {
  constructor(private readonly blogService: PostService) {}

  @Get()
  find(): PostList {
    return this.blogService.find();
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string): Post {
    return this.blogService.findBySlug(slug);
  }
}
