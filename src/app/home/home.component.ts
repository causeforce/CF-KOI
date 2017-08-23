import { Component } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { AuthService } from '../providers/auth.service';
import { Http } from '@angular/http';
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

    constructor(public authService: AuthService,
                private _GetAuthSSOToken: GetAuthSSOToken) {

        console.log('Reading _ConfigurationService ');
        // console.log(_ConfigurationService.getConfiguration());

        this._GetAuthSSOToken.getAuthSSOToken()
            .subscribe(
            (res) => {
                this.data = res;
                console.log('after reading');
//                console.log(this.data);
//                console.log(this.data.getSingleSignOnTokenResponse.token);
//                for (let data of this.data.getTopParticipantsDataResponse.teamraiserData) {
//                    console.log(data.name + " " + data.total);
//                    $('.data-json').append(data.total);
//                }
//
//                for (let data of this.data.getSingleSignOnTokenResponse) {
//                    console.log(this.data.getSingleSignOnTokenResponse.token);
//                }
//

                const convioUrl = 'https://secure2.convio.net/cfrca/site/CRGroupAPI?';
                const getGroupInfo = 'method=getGroupInfo&api_key=cfrca&v=1.0&response_format=json&group_id=';
                const ssoToken = this.data.getSingleSignOnTokenResponse.token;

                // Group Objects with ID(s) per event
                const albertaGroup: any = {
                    riderID: '225527',
                    crewID: '225528',
                    rfiID: '225929',
                    apiCall: convioUrl + getGroupInfo
                };

                const torontoGroup: any = {
                    riderID: '225338',
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
                const torontoCrewUrl = torontoGroup.apiCall + torontoGroup.crewID + '&sso_auth_token=';
                const torontoRiderUrl = torontoGroup.apiCall + torontoGroup.riderID + '&sso_auth_token=';
                const torontoRFIUrl = torontoGroup.apiCall + torontoGroup.rfiID + '&sso_auth_token=';

                // Alberta URLs
                const albertaCrewUrl = albertaGroup.apiCall + albertaGroup.crewID + '&sso_auth_token=';
                const albertaRiderUrl = albertaGroup.apiCall + albertaGroup.riderID + '&sso_auth_token=';
                const albertaRFIUrl = albertaGroup.apiCall + albertaGroup.rfiID + '&sso_auth_token=';

                // Montreal URLs
                const montrealCrewUrl = montrealGroup.apiCall + montrealGroup.crewID + '&sso_auth_token=';
                const montrealRiderUrl = montrealGroup.apiCall + montrealGroup.riderID + '&sso_auth_token=';
                const montrealRFIUrl = montrealGroup.apiCall + montrealGroup.rfiID + '&sso_auth_token=';

                // Vancouver URLs
                const vancouverCrewUrl = vancouverGroup.apiCall + vancouverGroup.crewID + '&sso_auth_token=';
                const vancouverRiderUrl = vancouverGroup.apiCall + vancouverGroup.riderID + '&sso_auth_token=';
                const vancouverRFIUrl = vancouverGroup.apiCall + vancouverGroup.rfiID + '&sso_auth_token=';

                // After SSO Token is received, fetch data

                // Toronto 2017
                $.getJSON(torontoCrewUrl + ssoToken, function (getData){
                    $('.to-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(torontoRiderUrl + ssoToken, function (getData){
                    $('.to-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(torontoRFIUrl + ssoToken, function (getData){
                    $('.to-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                // Alberta 2017
                $.getJSON(albertaCrewUrl + ssoToken, function (getData){
                    $('.ab-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(albertaRiderUrl + ssoToken, function (getData){
                    $('.ab-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(albertaRFIUrl + ssoToken, function (getData){
                    $('.ab-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                // Montreal 2017
                $.getJSON(montrealCrewUrl + ssoToken, function (getData){
                    $('.mo-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(montrealRiderUrl + ssoToken, function (getData){
                    $('.mo-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(montrealRFIUrl + ssoToken, function (getData){
                    $('.mo-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                // Vancouver 2017
                $.getJSON(vancouverCrewUrl + ssoToken, function (getData){
                    $('.va-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(vancouverRiderUrl + ssoToken, function (getData){
                    $('.va-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(vancouverRFIUrl + ssoToken, function (getData){
                    $('.va-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

//                $.post('https://secure2.convio.net/organization/site/CRTeamraiserAPI?method=getRegistration&api_key=cfrca&v=1.0&fr_id=1581&sso_auth_token=' + this.data.getSingleSignOnTokenResponse.token, function(survey) {
//                    console.log('Inside Survey');
//                    console.log(survey);
//                });

            },
            (error) => console.log('error : ' + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );
// *================================ BEGIN ONEDAY CODE ================================ * //

        this._GetAuthSSOToken.getOneDaySSOAuthToken()
            .subscribe(
            (res) => {
                this.data = res;
                console.log('after reading');
                console.log(this.data);

                const convioUrl = 'https://secure2.convio.net/cfnz/site/CRGroupAPI?';
                const getGroupInfo = 'method=getGroupInfo&api_key=cfnz&v=1.0&response_format=json&group_id=';

                 // Group Objects with ID(s) per event
                const brisbaneGroup: any = {
                    walkerID: '52862' + '&sso_auth_token=',
                    apiCall: convioUrl + getGroupInfo
                };

                const melbourneGroup: any = {
                    walkerID: '53147' + '&sso_auth_token=',
                    apiCall: convioUrl + getGroupInfo
                };

                // Brisbane Final URLs
                const brisbaneWalkerUrl = brisbaneGroup.apiCall + brisbaneGroup.walkerID;

                // Melbourne Final URLs
                const melbourneWalkerUrl = melbourneGroup.apiCall + melbourneGroup.walkerID;

                // Brisbane 2017
                $.getJSON(brisbaneWalkerUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.br-walkers').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                 // Melbourne 2017
                $.getJSON(melbourneWalkerUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.ml-walkers').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                },
            (error) => console.log('error : ' + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );
    }
}
