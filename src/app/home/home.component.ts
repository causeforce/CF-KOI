import { Component } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { AuthService } from '../providers/auth.service';
import { Http } from '@angular/http';
import * as $ from 'jquery';

import { ConfigurationService } from './config-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    configs;
    
    email: string;
    password: string;
    data;

    constructor(public authService: AuthService,
                private _ConfigurationService: ConfigurationService) {
        
        console.log("Reading _ConfigurationService ");
        //console.log(_ConfigurationService.getConfiguration());
        
        this._ConfigurationService.getConfiguration()
            .subscribe(
            (res) => {
                this.data = res;
                console.log("after reading");
                console.log(this.data);
                console.log(this.data.getTopParticipantsDataResponse.teamraiserData);
                for (let data of this.data.getTopParticipantsDataResponse.teamraiserData) {
//                    console.log(data.name + " " + data.total);
                    $('.data-json').append("<li>" + data.name + "</li><li>" + data.total + "</li> <br>");
                }
                
            },
            (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );  
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
    
}
