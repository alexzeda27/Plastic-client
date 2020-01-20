import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Machine } from '../models/machine';

@Injectable()
export class MachineService{
 
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para crear maquinas
    create(machine: Machine): Observable<any>{
        let params = JSON.stringify(machine);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'crear-maquina', params, {headers:headers});
    }

    //Método para listar maquinas
    getMachines(page = null): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-maquina-paginados/' + page, {headers: headers});
    }

    //Método para listar una sola maquina
    getMachine(id): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-maquina' + id, {headers: headers});
    }

    //Método para listar todas la maquinas sin paginar
    getMachinesOnly(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-operadores', {headers: headers});
    }
}