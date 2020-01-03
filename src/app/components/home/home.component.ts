import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    public title: string;
    public employee: Employee;
    public identity;
    public token;

    constructor(
        private _employeeService: EmployeeService,
    )
    {
        this.title = 'Bienvenido a PLASTIC APP';
        this.employee = this._employeeService.getIdentity();
        this.identity = this.employee;
        this.token = this._employeeService.getToken();
    }

    ngOnInit()
    {
        console.log("El componente de ha cargado..");
    }
}