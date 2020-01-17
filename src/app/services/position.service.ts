import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Position } from '../models/position';

@Injectable()
export class PositionService
{
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar departamentos
    register(position: Position): Observable<any>
    {
        let params = JSON.stringify(position);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'registrar-puesto', params, {headers:headers});
    }

    //Método para listar departamentos
    getPositions(page = null): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
        return this._http.get(this.url + 'consultar-puesto-paginados/' + page, {headers: headers});
    }

    //Método para listar objeto sin paginar
    getPositionOnly():Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-puestos', {headers:headers});
    }
    
    //Método para listar un solo bloque
    getPosition(id): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
        return this._http.get(this.url + 'consultar-puesto' + id, {headers: headers});
    }
}