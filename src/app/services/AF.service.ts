import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';


@Injectable({providedIn: 'root'})
export class AF {
  constructor(public af: AngularFireAuth) {
  }

  socialLogin(loginProvider) {
    if (loginProvider === 'twitter') {
          return this.af.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider())
          .catch( e => {
            console.log(e);
          });
    }
  }

}
