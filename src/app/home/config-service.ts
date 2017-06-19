import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


///Service class to call REST API
@Injectable()
export class ConfigurationService {
    constructor(private http: Http) {
    }
    
    getConfiguration = (): Observable<Response> => {
        console.log("In getConfiguration of ConfigurationService");
        let jSonUrl = 'https://crossorigin.me/https://secure2.convio.net/cfrca/site/CRTeamraiserAPI?method=getTopParticipantsData&api_key=cfrca&v=1.0&fr_id=1581&response_format=json';
        return this.http.get(jSonUrl).map(res => res.json());
    }
}