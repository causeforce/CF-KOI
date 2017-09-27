import { Component } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import * as firebase from 'firebase';
import * as $ from 'jquery';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(public authService: AuthService) {
      firebase.auth().onAuthStateChanged(function (user) {
          console.log(user);
          if (user.emailVerified) {
            console.log('Email is verified');
            $('.email-verify').html('Email is now verified. You\'re all set!');
          } else {
            console.log('Email is not verified');
              $('.email-verify').html('Email is NOT verified. Please check your email.');
          }
      });
  }

  changeDisplayName() {
            firebase.auth().onAuthStateChanged(function (user) {
                user.updateProfile({
                displayName: $('.display-name').val()
                });
                if (user) {
                    console.log(user);
                } else {
                }
            });
      }
    verifyEmail() {
            firebase.auth().onAuthStateChanged(function (user) {
                user.sendEmailVerification();
                 if (user.emailVerified) {
                    console.log('Email is verified');
                    $('.email-verify').html('Email is now verified. You\'re all set!');
                  } else {
                    console.log('Email is not verified');
                      $('.email-verify').html('Email is NOT verified. Please check your email.');
                  }
            });
      }

}
