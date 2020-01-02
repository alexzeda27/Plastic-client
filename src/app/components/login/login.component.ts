import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { identity } from 'rxjs';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [EmployeeService]
})
export class LoginComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public status: string;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService
    )
    {
        this.title = 'Inciar Sesión';
        this.employee = new Employee("", "", "", "", "", "", "", "", "", "", "", "");
    }

    ngOnInit()
    {
        console.log('Componente cargado...');
    }

    onSubmit()
    {
        this._employeeService.singIn(this.employee).subscribe(
            response => {
                this.identity = response.employee;

                console.log(this.identity);
                if(!this.identity || !this.identity._id)
                {
                    this.status = 'error';
                }
                else
                {
                    this.status = 'success';
                    //Persistir datos del usuario
                    localStorage.setItem('identity', JSON.stringify(this.identity));

                    //Conseguir el token
                    this.getToken();
                }
                this.status = 'success';
            },
            error => {
                var errorMessage = <any>error;
                if(errorMessage != null)
                {
                    this.status = 'error';
                }
            }
        );
    }

    getToken()
    {
        this._employeeService.singIn(this.employee, 'true').subscribe(
            response => {
                this.token = response.token;

                console.log(this.token);
                if(this.token.length <= 0)
                {
                    this.status = 'error';
                }
                else
                {
                    this.status = 'success';
                    //Persistir el token del usuario
                    localStorage.setItem('token', this.token);
                    //Conseguir los contadores o estadisticas 
                    this._router.navigate(['/']);

                }
                this.status = 'success';
            },
            error => {
                var errorMessage = <any>error;
                if(errorMessage != null)
                {
                    this.status = 'error';
                }
            }
        );
    }
}