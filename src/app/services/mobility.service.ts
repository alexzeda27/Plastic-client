import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Mobility } from '../models/mobility';

@Injectable()
export class MobilityService
{
    public url;
    
    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar departamentos
    register(mobility: Mobility): Observable<any>
    {
        let params = JSON.stringify(mobility);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-movilidad', params, {headers:headers});
    }

    getMobilities(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-movilidades', {headers: headers});
    }

}
