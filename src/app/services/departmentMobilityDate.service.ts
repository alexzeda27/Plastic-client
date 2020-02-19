import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { DepartmentMobility } from '../models/departmentMobilityDate';

@Injectable()
export class DepartmentMobilityService
{
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar movilidad
    register(departmentMobility: DepartmentMobility): Observable<any>
    {
        let params = JSON.stringify(departmentMobility);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/crear-departamento-movilidad', params, {headers:headers});
    }

    getDepartmentMobility(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-departamentos-movilidad', {headers:headers});
    }
}