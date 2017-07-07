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

  constructor(public authService: AuthService) {}

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

}