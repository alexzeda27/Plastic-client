import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { SquareMobility } from '../models/squareMobilityDate';

@Injectable()
export class SquareMobilityService
{
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar movilidad
    register(squareMobility: SquareMobility): Observable<any>
    {
        let params = JSON.stringify(squareMobility);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-bloque-movilidad', params, {headers:headers});
    }

    getSquareMobility(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-bloques-movilidad', {headers:headers});
    }
}