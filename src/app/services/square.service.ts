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

    //Método para listar bloques
    getSquares(page = null): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-bloque-paginados/' + page, {headers: headers});
    }

    //Méotodo para listar bloques sin paginar
    getSquaresOnly(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-bloques', {headers: headers});
    }

    //Método para listar un solo bloque
    getSquare(id): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-bloque/' + id, {headers: headers});
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