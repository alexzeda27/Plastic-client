import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Square } from '../models/square';

@Injectable()
export class SquareService{

    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar bloques
    create(square: Square): Observable<any>{
        let params = JSON.stringify(square);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-bloque', params, {headers:headers});
    }

    //Método para actualizar bloques
    updateSquare(square: Square): Observable<any>
    {
        let params = JSON.stringify(square);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //TO DO Agregar token

        return this._http.put(this.url + 'actualizar-bloque/' + square._id, params, {headers: headers});
    }
}