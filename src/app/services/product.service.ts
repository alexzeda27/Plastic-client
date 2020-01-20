import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Product } from '../models/product';

@Injectable()
export class ProductService
{
    public url;
    
    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar departamentos
    register(product: Product): Observable<any>
    {
        let params = JSON.stringify(product);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-producto', params, {headers:headers});
    }

}

