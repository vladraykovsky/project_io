import {Injectable} from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2/auth';


import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import * as firebase from 'firebase';
// import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;


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
