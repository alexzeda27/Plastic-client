import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'employee-edit',
    templateUrl: './employee-edit.component.html',
    providers: [EmployeeService, UploadService]
})
export class EmployeeEditComponent implements OnInit{
    public title: string;
    public button: string;
    public employee: Employee;
    public identity;
    public token;
    public status: string;
    public url: string;
    public payroll;

    public employees;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _uploadService: UploadService
    )
    {
        this.title = 'Actualizar empleado';
        this.button = "Actualizar empleado";
        this.employee = this._employeeService.getIdentity();
        this.identity = this.employee;
        this.token = this._employeeService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log('Componente cargado...');
        this.loadPage();
    }

    loadPage()
    {
        this._route.params.subscribe(params => {
            let payroll = + params['payroll'];
            this.payroll = payroll;

            if(!params['payroll'])
            {
                payroll = this.payroll;
            }

            //Devuelve los datos del empleado
            this.getEmployee(payroll);

            console.log(this.payroll)
        });
    }

    getEmployee(payroll)
    {
        this._employeeService.getEmployee(payroll).subscribe(
            response => {
                if(response.employee.payroll)
                {
                    console.log(response);
                }
                else
                {
                    this.status = 'error';
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);

                if(errorMessage != null)
                {
                    this.status = 'error';
                }
            }
        );
    } 
}