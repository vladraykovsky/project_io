import {Injectable} from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';


@Injectable({providedIn: 'root'})
export class AF {
  constructor(public af: AngularFireAuth) {
  }

  socialLogin(loginProvider) {
    if (loginProvider === 'twitter') {
          return this.af.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

}
