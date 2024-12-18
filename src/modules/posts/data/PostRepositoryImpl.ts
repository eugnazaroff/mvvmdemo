import axios from 'axios';
import {IPost} from '../domain/IPost';
import {IPostsRepository} from '../domain/IPostsRepository';
import {injectable} from 'inversify';
import {apiClient} from '../../../app/services/apiClient';

@injectable()
export class PostRepositoryImpl implements IPostsRepository {
  getPost = async (id: string): Promise<IPost> => {
    const url = `/posts/${id}`;
    const res = await apiClient.get<IPost>(url);
    if (res.data === undefined) {
      throw new Error('Post not found or an error occurred.');
    }

    return res.data;
  };
  getPosts = async (): Promise<Array<IPost>> => {
    const url = '/posts';
    const res = await apiClient.get<Array<IPost>>(url);
    if (res.data === undefined) {
      throw new Error('Posts not found or an error occurred.');
    }
    return res.data;
  };
}
