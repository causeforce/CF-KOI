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
                console.log(this.data);
                console.log(this.data.getSingleSignOnTokenResponse.token);
//                for (let data of this.data.getTopParticipantsDataResponse.teamraiserData) {
//                    console.log(data.name + " " + data.total);
//                    $('.data-json').append(data.total);
//                }
//
//                for (let data of this.data.getSingleSignOnTokenResponse) {
//                    console.log(this.data.getSingleSignOnTokenResponse.token);
//                }
//
                // Group ID per Event
                const albertaRiderGroupID = '225527';
                const albertaCrewGroupID = '225528';
                const albertaRFIGroupID = '225929';

                const torontoRiderGroupID = '225338';
                const torontoCrewGroupID = '225339';
                const torontoRFIGroupID = '225792';

                const montrealRiderGroupID = '225521';
                const montrealCrewGroupID = '225522';
                const montrealRFIGroupID = '225927';

                const vancouverRiderGroupID = '225533';
                const vancouverCrewGroupID = '225534';
                const vancouverRFIGroupID = '225948';

                const convioUrl = 'https://secure2.convio.net/cfrca/site/CRGroupAPI?';
                const getGroupInfo = 'method=getGroupInfo&api_key=cfrca&v=1.0&response_format=json&group_id=';

                // Full URL after concat //

                // Toronto URLs
                const torontoCrewUrl = convioUrl + getGroupInfo + torontoCrewGroupID + '&sso_auth_token=';
                const torontoRiderUrl = convioUrl + getGroupInfo + torontoRiderGroupID + '&sso_auth_token=';
                const torontoRFIUrl = convioUrl + getGroupInfo + torontoRFIGroupID + '&sso_auth_token=';

                // Alberta URLs
                const albertaCrewUrl = convioUrl + getGroupInfo + albertaCrewGroupID + '&sso_auth_token=';
                const albertaRiderUrl = convioUrl + getGroupInfo + albertaRiderGroupID + '&sso_auth_token=';
                const albertaRFIUrl = convioUrl + getGroupInfo + albertaRFIGroupID + '&sso_auth_token=';

                // Montreal URLs
                const montrealCrewUrl = convioUrl + getGroupInfo + montrealCrewGroupID + '&sso_auth_token=';
                const montrealRiderUrl = convioUrl + getGroupInfo + montrealRiderGroupID + '&sso_auth_token=';
                const montrealRFIUrl = convioUrl + getGroupInfo + montrealRFIGroupID + '&sso_auth_token=';

                // Vancouver URLs
                const vancouverCrewUrl = convioUrl + getGroupInfo + vancouverCrewGroupID + '&sso_auth_token=';
                const vancouverRiderUrl = convioUrl + getGroupInfo + vancouverRiderGroupID + '&sso_auth_token=';
                const vancouverRFIUrl = convioUrl + getGroupInfo + vancouverRFIGroupID + '&sso_auth_token=';

                // After SSO Token is Received, Get Data

                // Toronto 2017
                $.getJSON(torontoCrewUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
//                    console.log(getData.getGroupInfoResponse.groupInfo.numMembers);
                    $('.to-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(torontoRiderUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.to-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(torontoRFIUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.to-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                // Alberta 2017
                $.getJSON(albertaCrewUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.ab-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(albertaRiderUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.ab-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(albertaRFIUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.ab-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                // Montreal 2017
                $.getJSON(montrealCrewUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.mo-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(montrealRiderUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.mo-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(montrealRFIUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.mo-rfi').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });

                // Vancouver 2017
                $.getJSON(vancouverCrewUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.va-crew').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(vancouverRiderUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
                    $('.va-rider').append(getData.getGroupInfoResponse.groupInfo.numMembers);
                });
                $.getJSON(vancouverRFIUrl + this.data.getSingleSignOnTokenResponse.token, function (getData){
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
        
        this._GetAuthSSOToken.getOneDaySSOAuthToken()
            .subscribe(
            (res) => {
                this.data = res;
                console.log('after reading');
                console.log(this.data);
                
                const brisbaneWalkerGroupID = '52862';
                const melbourneWalkerGroupID = '53147';

                const convioUrl = 'https://secure2.convio.net/cfnz/site/CRGroupAPI?';
                const getGroupInfo = 'method=getGroupInfo&api_key=cfnz&v=1.0&response_format=json&group_id=';
                
                // Brisbane URLs
                const brisbaneWalkerUrl = convioUrl + getGroupInfo + brisbaneWalkerGroupID + '&sso_auth_token=';
                
                //Melbourne URLs
                const melbourneWalkerUrl = convioUrl + getGroupInfo + melbourneWalkerGroupID + '&sso_auth_token=';
                
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
