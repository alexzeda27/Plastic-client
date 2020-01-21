import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService{
 
    public url: string;
    public employee;
    public identity;
    public identityEmployee;
    public token;
    public payroll;

    constructor(public _http: HttpClient)
    {
        this.url = GLOBAL.url;
    }

    //Método para registrar empleados
    register(employee: Employee): Observable<any>{
        let params = JSON.stringify(employee);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'registrar-empleado', params, {headers:headers});
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

    getIdentityEmployee()
    {
        let identityEmployee = JSON.parse(localStorage.getItem('identityEmployee'));

        if(identityEmployee != "undefined")
        {
            this.identityEmployee = identityEmployee;
        }
        else
        {
            this.identityEmployee = null;
        }

        return this.identityEmployee;
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

        return this._http.put(this.url + 'actualizar-empleado/' + employee.payroll, params, {headers: headers});
    }

    //Enlistar empleados
    getEmployees(page = null): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-empleado-paginados/' + page, {headers: headers});
    }

    //Método para listar todos los empleados
    getEmployeesOnly(): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-empleados', {headers: headers});
    }

    //Cargar lista de empleado individual
    getEmployee(payroll): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'consultar-empleado/' + payroll, {headers: headers});
    }

    removeImage(payroll, imageFile): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'eliminar-imagen/' + payroll + '/' + imageFile, {headers: headers});
    }

    //Método para eliminar empleado
    removeEmployee(payroll): Observable<any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'eliminar-empleado/' + payroll, {headers: headers});
    }
}