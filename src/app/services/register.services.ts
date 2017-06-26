import {Injectable} from '@angular/core';
// import {Router} from '@angular/router';
import {User} from '../common/user';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()

export class RegisterService {

  // private user: User;
  fireListObserv: FirebaseListObservable<any[]>;

  constructor (private angFireBase: AngularFireDatabase) {
    this.fireListObserv = this.angFireBase.list('/users');
  }

  getUsers () {
    return this.fireListObserv;
  }

  registerUserToDatabase (user: User) {
    this.fireListObserv.push(user);
  }


}