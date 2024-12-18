import { inject, injectable } from 'inversify';
import type { IPostsRepository } from '../IPostsRepository';

@injectable()
export class GetPostUseCase {
    constructor(@inject('IPostsRepository') private repository: IPostsRepository) { }

    async execute(id: string) {
        return this.repository.getPost(id);
    }
}
