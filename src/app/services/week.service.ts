import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Week } from '../models/week';

@Injectable()
export class WeekService
{
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    getWeeks(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-semanas', {headers:headers});
    }
}