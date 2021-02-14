export class Post {
  title: string;
  slug : string;
  html : string;
}

export type PostList = Omit<Post, 'html'>[];
