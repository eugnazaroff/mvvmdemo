import {Container} from 'inversify';
import {postsContainerModule} from '../../modules/posts/DI/container';
import {AuthService, type IAuthService} from '../services/';
import {createTypedInjection} from './hooks.ts';

export const appContainer = new Container();

export interface Services {
  IAuthService: IAuthService;
}

appContainer
  .bind<IAuthService>('IAuthService')
  .to(AuthService)
  .inSingletonScope();

appContainer.load(postsContainerModule);

export const useAppInjection = createTypedInjection<Services>();
