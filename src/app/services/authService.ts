import {makeAutoObservable} from 'mobx';
import {injectable} from 'inversify';

export interface IAuthService {
  isAuth: boolean;
}

@injectable()
export class AuthService implements IAuthService {
  constructor() {
    makeAutoObservable(this);
  }

  isAuth = true;
}
