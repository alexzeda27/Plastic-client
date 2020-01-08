import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'employee-query',
    templateUrl: './employee-query.component.html',
    providers: [EmployeeService]
})
export class EmployeeQueryComponent implements OnInit
{
    public title: string;
    public button: string;
    public employee: Employee;
    public identity;
    public token;
    public url;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService
    )
    {
        this.title = "Consultar empleados";
        this.button = "Consultar";
        this.identity = this._employeeService.getIdentity();
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log("Componente cargado con exito");
        
        this.loadPage();
    }

    loadPage()
    {
        this._route.params.subscribe(params => {
            let payroll = params['payroll'];
            this.getEmployee(payroll);
        });
    }

    getEmployee(payroll)
    {
        this._employeeService.getEmploye(payroll).subscribe(
            response => {
                if(response.employee)
                {
                    console.log(response);
                    
                    this.employee = response.employee;
                }
                else
                {
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
                this._router.navigate(['/perfil', this.identity.payroll]);
            }
        );
    }
}