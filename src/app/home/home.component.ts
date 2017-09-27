import { Component } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { AuthService } from '../providers/auth.service';
import { Http } from '@angular/http';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType
} from '@angular/common/http';
import * as firebase from 'firebase';
import * as $ from 'jquery';

import { GetAuthSSOToken } from './config-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    configs;
    data;
    tableContent: HTMLElement = document.querySelector('.all-table') as HTMLElement;

    constructor(public authService: AuthService,
                private _GetAuthSSOToken: GetAuthSSOToken,
                private http: HttpClient) {

        console.log('Reading _ConfigurationService ');
        // console.log(_ConfigurationService.getConfiguration());    

                const convioUrl = 'https://secure2.convio.net/cfrca/site/SRGroupAPI?';
                const getGroupInfo = 'method=getGroupInfo&api_key=cfrca&login_name=apiadmin&login_password=welcome&v=1.0&response_format=json&group_id=';
//                const ssoToken = this.data.getSingleSignOnTokenResponse.token;

                // Group Objects with ID(s) per event
                const albertaGroup: any = {
                    riderID: '225527',
                    crewID: '225528',
                    rfiID: '225929',
                    apiCall: convioUrl + getGroupInfo
                };

                const torontoGroup: any = {
//                    riderID: '225338',
                    riderID: '225791',
                    crewID: '225339',
                    rfiID: '225792',
                    apiCall: convioUrl + getGroupInfo
                };

                const montrealGroup: any = {
                    riderID: '225521',
                    crewID: '225522',
                    rfiID: '225927',
                    apiCall: convioUrl + getGroupInfo
                };

                const vancouverGroup: any = {
                    riderID: '225533',
                    crewID: '225534',
                    rfiID: '225948',
                    apiCall: convioUrl + getGroupInfo
                };

                // Full URL(s) after concat //

                // Toronto URLs
                const torontoCrewUrl = torontoGroup.apiCall + torontoGroup.crewID;
                const torontoRiderUrl = torontoGroup.apiCall + torontoGroup.riderID;
                const torontoRFIUrl = torontoGroup.apiCall + torontoGroup.rfiID;

                // Alberta URLs
                const albertaCrewUrl = albertaGroup.apiCall + albertaGroup.crewID;
                const albertaRiderUrl = albertaGroup.apiCall + albertaGroup.riderID;
                const albertaRFIUrl = albertaGroup.apiCall + albertaGroup.rfiID;

                // Montreal URLs
                const montrealCrewUrl = montrealGroup.apiCall + montrealGroup.crewID;
                const montrealRiderUrl = montrealGroup.apiCall + montrealGroup.riderID;
                const montrealRFIUrl = montrealGroup.apiCall + montrealGroup.rfiID;

                // Vancouver URLs
                const vancouverCrewUrl = vancouverGroup.apiCall + vancouverGroup.crewID;
                const vancouverRiderUrl = vancouverGroup.apiCall + vancouverGroup.riderID;
                const vancouverRFIUrl = vancouverGroup.apiCall + vancouverGroup.rfiID;

                // After SSO Token is received, fetch data
                
                this.getData(torontoCrewUrl, '.to-crew');
                this.getData(torontoRiderUrl, '.to-rider');
                this.getData(torontoRFIUrl, '.to-rfi');
                
                this.getData(albertaCrewUrl, '.ab-crew');
                this.getData(albertaRiderUrl, '.ab-rider');
                this.getData(albertaRFIUrl, '.ab-rfi');
                
                this.getData(montrealCrewUrl, '.mo-crew');
                this.getData(montrealRiderUrl, '.mo-rider');
                this.getData(montrealRFIUrl, '.mo-rfi');
                
                this.getData(vancouverCrewUrl, '.va-crew');
                this.getData(vancouverRiderUrl, '.va-rider');
                this.getData(vancouverRFIUrl, '.va-rfi');

        
        
//        this._GetAuthSSOToken.getAuthSSOToken()
//            .subscribe(
//            (res) => {
//                this.data = res;
//                console.log('after reading');
////                console.log(this.data);
////                console.log(this.data.getSingleSignOnTokenResponse.token);
////                for (let data of this.data.getTopParticipantsDataResponse.teamraiserData) {
////                    console.log(data.name + " " + data.total);
////                    $('.data-json').append(data.total);
////                }
////
////                for (let data of this.data.getSingleSignOnTokenResponse) {
////                    console.log(this.data.getSingleSignOnTokenResponse.token);
////                }
//
//                
////                this.http.get(torontoCrewUrl + ssoToken).subscribe(res => {
////                    this.data = res.json();
////                    console.log('new get call results: ' + this.data);
////                });
//
//                // Toronto 2017
////                $.getJSON(torontoCrewUrl + ssoToken, function (getData){
////                    $('.to-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
////                });
////                $.getJSON(torontoRiderUrl + ssoToken, function (getData){
////                    $('.to-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
////                });
////                $.getJSON(torontoRFIUrl + ssoToken, function (getData){
////                    $('.to-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
////                });
//
//
////                $.post('https://secure2.convio.net/organization/site/CRTeamraiserAPI?method=getRegistration&api_key=cfrca&v=1.0&fr_id=1581&sso_auth_token=' + this.data.getSingleSignOnTokenResponse.token, function(survey) {
////                    console.log('Inside Survey');
////                    console.log(survey);
////                });
//
//            },
//            (error) => console.log('error : ' + error),
//            () => console.log('Error in GetApplication in Login : ' + Error)
//        );
// *================================ BEGIN ONEDAY CODE ================================ * //

//        this._GetAuthSSOToken.getOneDaySSOAuthToken()
//            .subscribe(
//            (res) => {
//                this.data = res;
//                console.log('after reading');
////                console.log(this.data);
//
//                const convioUrl = 'https://secure2.convio.net/cfnz/site/CRGroupAPI?';
//                const getGroupInfo = 'method=getGroupInfo&api_key=cfnz&v=1.0&response_format=json&group_id=';
//
//                 // Group Objects with ID(s) per event
//                const brisbaneGroup: any = {
//                    walkerID: '52862' + '&sso_auth_token=',
//                    apiCall: convioUrl + getGroupInfo
//                };
//
//                const melbourneGroup: any = {
//                    walkerID: '53147' + '&sso_auth_token=',
//                    apiCall: convioUrl + getGroupInfo
//                };
//
//                // Brisbane Final URLs
//                const brisbaneWalkerUrl = brisbaneGroup.apiCall + brisbaneGroup.walkerID;
//
//                // Melbourne Final URLs
//                const melbourneWalkerUrl = melbourneGroup.apiCall + melbourneGroup.walkerID;
//
//                // Brisbane 2017
//                $.getJSON(brisbaneWalkerUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
//                    $('.br-walkers').append(getData.getGroupInfoResponse.groupInfo.numMembers);
//                });
//
//                 // Melbourne 2017
//                $.getJSON(melbourneWalkerUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
//                    $('.ml-walkers').append(getData.getGroupInfoResponse.groupInfo.numMembers);
//                });
//
//                },
//            (error) => console.log('error : ' + error),
//            () => console.log('Error in GetApplication in Login : ' + Error)
//        );
    }
    
    getData(url, element) {
        const req = new HttpRequest('GET', url, {
          reportProgress: true
        });

        this.http.request(req).subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request sent!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header received!');
              break;
            case HttpEventType.DownloadProgress:
              const kbLoaded = Math.round(event.loaded / 1024);
              console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
              break;
            case HttpEventType.Response:
              console.log('😺 Done!', event.body.getGroupInfoResponse);
              $(element).append(event.body.getGroupInfoResponse.groupInfo.numMembers);
          }
        });
    }
    
    
    tableShow(el) {     
        if ($(el).hasClass('alberta-btn')){
            $('.ab17-table').siblings('.table-responsive').fadeOut('fast');
            $('.ab17-table').fadeIn('fast');
        } else if ($(el).hasClass('toronto-btn')){
            $('.to17-table').siblings('.table-responsive').fadeOut('fast');
            $('.to17-table').fadeIn('fast');
        }
    }    

    showAllTable() {
        $('.all-table').fadeIn(1000);
        $('.all-table').siblings('.table-responsive').fadeOut('fast');
    }
}
