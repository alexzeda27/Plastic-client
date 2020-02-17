import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Day } from '../models/day';

@Injectable()
export class DayService
{
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    getDays(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-dias', {headers:headers});
    }
}