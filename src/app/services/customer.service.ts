import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService
{
    public url;
    
    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar departamentos
    register(customer: Customer): Observable<any>
    {
        let params = JSON.stringify(customer);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-cliente', params, {headers:headers});
    }

    getCustomers(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + '/consultar-clientes', {headers: headers});
    }
}