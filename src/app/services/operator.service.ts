import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Operator } from '../models/operator';

@Injectable()
export class OperatorService
{
    public url;
    
    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar departamentos
    register(operator: Operator): Observable<any>
    {
        let params = JSON.stringify(operator);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'actualizar-operador' + operator._id, params, {headers:headers});
    }

    getOperators(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + '/consultar-operadores', {headers: headers});
    }
}