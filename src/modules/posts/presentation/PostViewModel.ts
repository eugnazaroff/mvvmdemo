import {makeAutoObservable, runInAction} from 'mobx';
import {IPost} from '../domain/IPost';
import {GetPostUseCase} from '../domain/useCase/getPostUseCase';
import {inject, injectable} from 'inversify';

@injectable()
export class PostViewModel {
  constructor(
    @inject('GetPostUseCase') private readonly useCase: GetPostUseCase,
  ) {
    makeAutoObservable(this);
  }
  post?: IPost = undefined;

  isLoading = false;

  getPost = async (id: string) => {
    this.isLoading = true;
    const post = await this.useCase.execute(id);
    runInAction(() => {
      this.post = post;
      this.isLoading = false;
    });
  };
}
