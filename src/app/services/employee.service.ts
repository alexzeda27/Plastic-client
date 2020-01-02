import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService{
 
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    register(employee: Employee): Observable<any>{
        let params = JSON.stringify(employee);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'registrar', params, {headers:headers});
    }

    singIn(employee: Employee, gettoken = null): Observable<any>{
        if(gettoken != null)
        {
            employee = Object.assign(employee, {gettoken});
        }

        let params = JSON.stringify(employee);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'login', params, {headers:headers});
    }

    getIdentity()
    {
        let identity = JSON.parse(localStorage.getItem('identity'));
        
        if(identity != "undefined")
        {
            this.identity = identity;
        }
        else
        {
            this.identity = null;
        }

        return this.identity;
    }

    getToken()
    {
        let token = localStorage.getItem('token');

        if(token != "undefined")
        {
            this.token = token;
        }
        else
        {
            this.token = null;
        }

        return this.token;
    }
}