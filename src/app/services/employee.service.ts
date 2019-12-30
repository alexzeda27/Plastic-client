import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService{
 
    public url: string;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    register(employee: Employee): Observable<any>{
        let params = JSON.stringify(employee);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'registro', params, {headers:headers});
    }
}