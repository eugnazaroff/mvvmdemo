import {ContainerModule, interfaces} from 'inversify';
import {IPostsRepository} from '../domain/IPostsRepository';
import {GetPostsUseCase} from '../domain/useCase/getPostsUseCase';
import {PostsViewModel} from '../presentation/PostsViewModel';
import {GetPostUseCase} from '../domain/useCase/getPostUseCase';
import {PostViewModel} from '../presentation/PostViewModel';
import {PostGraphQLRepositoryImpl} from '../data/PostGraphQLRepositoryImpl.ts';

export const postsContainerModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind<IPostsRepository>('IPostsRepository').to(PostGraphQLRepositoryImpl);
    bind<GetPostsUseCase>('GetPostsUseCase').to(GetPostsUseCase);
    bind<GetPostUseCase>('GetPostUseCase').to(GetPostUseCase);
    bind<PostsViewModel>('PostsViewModel').to(PostsViewModel);
    bind<PostViewModel>('PostViewModel').to(PostViewModel);
  },
);
