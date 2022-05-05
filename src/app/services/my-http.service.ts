// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myConstants } from '../config/constants';

@Injectable()
export class MyHttpService {

    private _get_url = myConstants.tv_endpoint;

    constructor(private httpClient: HttpClient ) { }

    fetchData() {
        return this.httpClient.get(this._get_url)
    }
}