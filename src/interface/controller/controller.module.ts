import { Module } from '@nestjs/common';
import { PostService } from '../../application/service/blog.service';
import { PostRepository } from '../../domain/repository/blog/post.repository';
import { PostController } from './post.conroller';


@Module({
  providers: [
    PostRepository,
    PostService,
  ],
  controllers: [PostController],
})
export class ControllerModule {}
