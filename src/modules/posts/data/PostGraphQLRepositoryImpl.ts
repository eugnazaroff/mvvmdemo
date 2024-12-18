import {IPost} from '../domain/IPost';
import {IPostsRepository} from '../domain/IPostsRepository';
import {injectable} from 'inversify';
import {gql} from '@apollo/client';
import {graphQLCLient} from '../../../app/services/graphQLCLient.ts';

@injectable()
export class PostGraphQLRepositoryImpl implements IPostsRepository {
  getPost = async (id: string): Promise<IPost> => {
    const _id = Number(id);
    const query = gql`
      query GetPostById($id: ID!) {
        post(id: $id) {
          title
          body
        }
      }
    `;
    const res = await graphQLCLient.query<IPost>({
      variables: {id: _id},
      query,
    });
    if (res.data === undefined) {
      throw new Error('Post not found or an error occurred.');
    }

    return res.data;
  };
  getPosts = async (): Promise<Array<IPost>> => {
    const query = gql`
      query {
        posts {
          title
          body
        }
      }
    `;
    const res = await graphQLCLient.query<{posts: Array<IPost>}>({
      query,
    });
    if (res.data === undefined) {
      throw new Error('Posts not found or an error occurred.');
    }
    return res.data.posts;
  };
}
