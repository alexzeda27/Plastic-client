import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { MobilityDate } from '../models/mobilityDate';

@Injectable()
export class MobilityDateService
{
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar movilidad
    register(mobilityDate: MobilityDate): Observable<any>
    {
        let params = JSON.stringify(mobilityDate);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-fechaMovilidad', params, {headers:headers});
    }
}