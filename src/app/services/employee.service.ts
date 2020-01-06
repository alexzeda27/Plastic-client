import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Employee } from '../models/employee';
import { map } from "rxjs/operators";

@Injectable()
export class EmployeeService{
 
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar empleados
    register(employee: Employee): Observable<any>{
        let params = JSON.stringify(employee);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'registrar', params, {headers:headers});
    }

    //Método para logear empleados
    singIn(employee: Employee, gettoken = null): Observable<any>{
        if(gettoken != null)
        {
            employee = Object.assign(employee, {gettoken});
        }

        let params = JSON.stringify(employee);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'login', params, {headers:headers});
    }

    //Método para persistir sesión de usuario
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

    //Método para generar el token de usuario
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

    //Método para actualizar empleados
    updateEmployee(employee: Employee): Observable<any>
    {
        let params = JSON.stringify(employee);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //TO DO Agregar token

        return this._http.put(this.url + 'actualizar/' + employee.payroll, params, {headers: headers});
    }

    //Enlistar empleados
    getEmployees(page = null): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-paginados/' + page, {headers: headers});
    }

    //Cargar lista de empleado individual
    getEmploye(payroll): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar/' + payroll, {headers: headers});
    }
}