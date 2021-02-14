import { Post } from '../../domain/repository/blog/model/post.model';

export const endpoints = {
  prefix: `api`,
  paths: {
    post: {
      path: 'posts',
      model: Post,
    }
  }
}