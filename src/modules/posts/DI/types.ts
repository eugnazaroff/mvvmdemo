import {IPostsRepository} from '../domain/IPostsRepository';
import {GetPostUseCase} from '../domain/useCase/getPostUseCase';
import {GetPostsUseCase} from '../domain/useCase/getPostsUseCase';
import {PostViewModel} from '../presentation/PostViewModel';
import {PostsViewModel} from '../presentation/PostsViewModel';
import {createTypedInjection} from '../../../app/DI/hooks';

export interface PostsDeps {
  IPostsRepository: IPostsRepository;
  GetPostsUseCase: GetPostsUseCase;
  GetPostUseCase: GetPostUseCase;
  PostsViewModel: PostsViewModel;
  PostViewModel: PostViewModel;
}

export const usePostsInjection = createTypedInjection<PostsDeps>();
