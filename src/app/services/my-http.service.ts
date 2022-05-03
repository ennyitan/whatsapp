// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { myConstants } from '../config/constants';

@Injectable()
export class MyHttpService {

    private _get_url = myConstants.tv_endpoint;
    private _post_url = myConstants.api_post;
    
    private params = new HttpParams({
        fromObject: { 
            name : 'name',
            age : 90,
            email : 'email',
            role : 'role',
            status : 'Inactive',
            mobileNumber : 1234567890
        }
    });

    constructor(private httpClient: HttpClient ) { }

    fetchData() {
        return this.httpClient.get(this._get_url)
    }

    fetchDataPost() {
        return this.httpClient.post(this._post_url, this.params)
    }
}