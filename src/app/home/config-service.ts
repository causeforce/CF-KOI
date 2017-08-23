import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


// Service class to call Luminate API
@Injectable()
export class GetAuthSSOToken {
    urlMethod: any = 'https://secure2.convio.net/cfrca/site/SRConsAPI?method=getSingleSignOnToken';
    urlCall: any = '&api_key=cfrca&v=1.0&response_format=json&cons_id=2804030&login_name=apiadmin&login_password=welcome';

    urlMethodOneDay: any = 'https://secure2.convio.net/cfnz/site/SRConsAPI?method=getSingleSignOnToken';
    urlCallOneDay: any = '&api_key=cfnz&v=1.0&response_format=json&cons_id=1001423&login_name=apiadmin&login_password=Dynamics1';

    constructor(private http: Http) {
    }

    getData() {
        this.http.get(this.urlMethod + this.urlCall).subscribe(res => {
            console.log(res);
        });
    }

    // Auth Token for Ride
    getAuthSSOToken = (): Observable<Response> => {
        console.log('Getting Auth SSO Token..');
        return this.http.post(this.urlMethod + this.urlCall, this.urlCall).map(res => res.json());
    }
    // Auth Token for OneDay
    getOneDaySSOAuthToken = (): Observable<Response> => {
        console.log('Getting One Day Auth SSO Token');
        return this.http.post(this.urlMethodOneDay + this.urlCallOneDay, this.urlCallOneDay).map(res => res.json());
    }
}
