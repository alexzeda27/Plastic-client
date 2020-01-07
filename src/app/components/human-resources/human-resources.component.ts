import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'human-resources',
    templateUrl: './human-resources.component.html',
    providers: [EmployeeService]
})
export class HumanResourcesComponent implements OnInit
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
        this.title = 'Recursos Humanos';
    }

    ngOnInit()
    {
        console.log('Componente cargado correctamente');
    }
}