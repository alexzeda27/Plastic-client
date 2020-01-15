import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { Position } from '../../models/position';
import { PositionService } from '../../services/position.service';
import { format } from 'url';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [EmployeeService, DepartmentService, PositionService]
})
export class RegisterComponent implements OnInit
{
    public title: string;
    public button: string;
    public employee: Employee;
    public department: Department[];
    public position: Position[];
    public status: string;
    public departments;
    public id;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _departmentService: DepartmentService,
        private _positionService: PositionService
    )
    {
        this.title = 'Registrar Empleado';
        this.button = 'Registrar'
        this.employee = new Employee("", "", "", "", "", "", "", "", "", "", "", "");
        this.departments = this._departmentService.getDepartments();
    }

    ngOnInit()
    {
        console.log('Componente cargado...');
    }

    onSubmit(form)
    {
        this._employeeService.register(this.employee).subscribe(
            response => {
                if(response.employee && response.employee._id)
                {
                    console.log(response.employee.toLowerCase());
                    this.status = 'success';
                    form.reset();
                }
                else
                {
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    redirection()
    {
        this._router.navigate(['/login']);
    }
}