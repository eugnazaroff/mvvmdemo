import {inject, injectable} from 'inversify';
import type {IPostsRepository} from '../IPostsRepository';

@injectable()
export class GetPostsUseCase {
  constructor(@inject('IPostsRepository') private repo: IPostsRepository) {}

  async execute() {
    return this.repo.getPosts();
  }
}
