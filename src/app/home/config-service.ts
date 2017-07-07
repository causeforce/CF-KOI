import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


///Service class to call REST API
@Injectable()
export class GetAuthSSOToken {
    constructor(private http: Http) {
    }

    getAuthSSOToken = (): Observable<Response> => {
        console.log('In getConfiguration of ConfigurationService');
        const jSonUrl = 'https://secure2.convio.net/cfrca/site/SRConsAPI?method=getSingleSignOnToken&api_key=cfrca&v=1.0&response_format=json&cons_id=2804030&login_name=apiadmin&login_password=welcome';
        const linkArray = 'method=getSingleSignOnToken&api_key=cfrca&v=1.0&response_format=json&cons_id=2804030&login_name=apiadmin&login_password=welcome';
//        return this.http.get(jSonUrl).map(res => res.json());
        return this.http.post(jSonUrl, linkArray).map(res => res.json());
    }
    getOneDaySSOAuthToken = (): Observable<Response> => {
        console.log('In getOneDaySSOAuthToken');
        const jSonUrl = 'https://secure2.convio.net/cfnz/site/SRConsAPI?method=getSingleSignOnToken&api_key=cfnz&v=1.0&response_format=json&cons_id=1001423&login_name=apiadmin&login_password=Dynamics1';
        const linkArray = 'method=getSingleSignOnToken&api_key=cfnz&v=1.0&response_format=json&cons_id=1001423&login_name=apiadmin&login_password=welcome';
        return this.http.post(jSonUrl, linkArray).map(res => res.json());
    }
}
