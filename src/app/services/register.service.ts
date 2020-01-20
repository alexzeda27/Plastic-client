import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Register } from '../models/register';

@Injectable()
export class RegisterService
{
    public url: string;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para agregra registros
    register(register: Register): Observable<any>
    {
        let params = JSON.stringify(register);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-registro', params, {headers: headers});
    }
}