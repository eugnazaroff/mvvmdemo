import {IPost} from './IPost';

export interface IPostsRepository {
  getPosts: () => Promise<Array<IPost>>;
  getPost: (id: string) => Promise<IPost>;
}
