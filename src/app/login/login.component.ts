import { Component } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import * as firebase from 'firebase';
import * as $ from 'jquery';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    email: string;
    password: string;
    loginURL: string;
    payload: string;

    constructor(public authService: AuthService,
                private http: HttpClient) {
//        let userName = (<HTMLInputElement>document.querySelector('.user_name')).value;
//        let userPass = (<HTMLInputElement>document.querySelector('.password')).value;
        let userName = $('.user_name').val;
        let userPass = $('.password').val;
        
        let loginURL = 'https://secure2.convio.net/cfrca/site/CRConsAPI?method=login&api_key=cfrca&login_name='+ userName +'&login_password='+ userPass +'&v=1.0';
    }

    signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    }

    login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    }

    logout() {
    this.authService.logout();
    }
    
    postData() {
      this.http.post(this.loginURL, this.payload).subscribe(
        res => {
//          console.log(res);
        }
      );
    }

}
