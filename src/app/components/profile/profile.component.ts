import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    providers: [EmployeeService]
})
export class ProfileComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public status: string;
    public identity;
    public token;
    public url;
    public jsonObject: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService
    )
    {
        this.title = 'Perfil';
        this.identity = this._employeeService.getIdentity();
        this.token = this._employeeService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log('Componente cargado con exito');
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
