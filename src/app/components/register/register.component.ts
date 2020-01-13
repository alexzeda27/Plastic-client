import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { format } from 'url';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [EmployeeService, DepartmentService]
})
export class RegisterComponent implements OnInit
{
    public title: string;
    public button: string;
    public employee: Employee;
    public department: Department;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _departmentService: DepartmentService 
    )
    {
        this.title = 'Registrar Empleado';
        this.button = 'Registrar'
        this.employee = new Employee("", "", "", "", "", "", "", "", "", "", "", "");
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