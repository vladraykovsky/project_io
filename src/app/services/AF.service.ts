import {Injectable} from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;


@Injectable({providedIn: 'root'})
export class AF {
  constructor(public af: AngularFireAuth) {
  }

  socialLogin(loginProvider) {
    if (loginProvider === 'twitter') {
          return this.af.auth.signInWithPopup( new TwitterAuthProvider()).then( data => {
            return data;
          }).catch( e => {
            console.log(e);
          });
    }
  }

}
