import type { Post } from '../../domain/repository/blog/model/post.model';
import { Adapter } from '../../shared/pattern/adapter.class';
import { endpoints } from '../api/api.conf';

const { post } = endpoints.paths;
export class PostAdapter extends Adapter<Post> {
  constructor(){
    super(post.path);
  }
}

export const postAdapter = new PostAdapter();