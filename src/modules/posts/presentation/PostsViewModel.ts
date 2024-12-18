import {makeAutoObservable, runInAction} from 'mobx';
import {IPost} from '../domain/IPost';
import {GetPostsUseCase} from '../domain/useCase/getPostsUseCase';
import {inject, injectable} from 'inversify';

@injectable()
export class PostsViewModel {
  constructor(@inject('GetPostsUseCase') private useCase: GetPostsUseCase) {
    makeAutoObservable(this);
    this.loadInitialPosts();
  }
  posts: Array<IPost> = [];
  isLoading = false;
  isRefreshing: boolean = false;

  loadInitialPosts = async () => {
    this.isLoading = true;
    await this.getPosts();
  };

  refresh = async () => {
    this.isRefreshing = true;
    await this.getPosts();
  };

  private getPosts = async () => {
    const posts = await this.useCase.execute();

    runInAction(() => {
      this.posts = posts;
      this.isLoading = false;
      this.isRefreshing = false;
    });
  };
}
