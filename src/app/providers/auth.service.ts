import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as $ from 'jquery';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        window.location.href = 'app-home';
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        $('.error-container').html('<h4>' + err.message + ' Please try again.</h4>');
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut()
      .then(value => {
        window.location.href = 'login';
    });
  }

}