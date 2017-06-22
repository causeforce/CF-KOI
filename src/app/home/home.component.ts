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
    data;

    constructor(public authService: AuthService,
                private _ConfigurationService: ConfigurationService) {
        
        console.log("Reading _ConfigurationService ");
        //console.log(_ConfigurationService.getConfiguration());
        
        $.post( "https://secure2.convio.net/cfrca/site/CRTeamraiserAPI?method=getRegistration&api_key=cfrca&v=1.0&fr_id=1581&response_format=json", function( data ) {
          $( ".data-json" ).append("<td>" + this.data.registeration.feesPaid + "</td>");
        });
        
        this._ConfigurationService.getConfiguration()
            .subscribe(
            (res) => {
                this.data = res;
                console.log("after reading");
                console.log(this.data);
                console.log(this.data.getTopParticipantsDataResponse.teamraiserData);
//                for (let data of this.data.getTopParticipantsDataResponse.teamraiserData) {
//                    console.log(data.name + " " + data.total);
//                    $('.data-json').append(data.total);
//                }
                
                for (let data of this.data.registeration) {
                    $('.data-json').append("<td>" + data.feePaid + "</td>");
                }
                
            },
            (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );  
    }
}
