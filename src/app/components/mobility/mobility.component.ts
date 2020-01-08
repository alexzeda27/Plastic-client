import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { Department } from '../../models/department';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentService } from '../../services/department.service';

@Component({
    selector: 'mobility',
    templateUrl: './mobility.component.html',
    providers: [EmployeeService, DepartmentService]
})
export class MobilityComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public department: Department;
    public identity;
    public token;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _departmentService: DepartmentService
    )
    {
        this.title = "Movilidad";
    }

    ngOnInit()
    {
        console.log("Componente cargado con exito");
    }

}