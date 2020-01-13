import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Department } from '../models/department';

@Injectable()
export class DepartmentService
{
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar departamentos
    register(department: Department): Observable<any>
    {
        let params = JSON.stringify(department);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'registrar-departamento', params, {headers:headers});
    }

    //Método para listar departamentos
    getDepartments(page = null): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
        return this._http.get(this.url + 'consultar-departamento-paginados/' + page, {headers: headers});
    }
    
    //Método para listar un solo bloque
    getDepartment(id): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
        return this._http.get(this.url + 'consultar-departamento' + id, {headers: headers});
    }
}