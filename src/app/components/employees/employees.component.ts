import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public employee: Employee[];
    public identity;
    public token;
    public status: string;
    public url: string;
    public page;
    public next_page;
    public prev_page;
    public total;
    public pages;
    public employees;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService
    )
    {
        this.title = "Empleados";
        this.button_update = "Actualizar Empleado";
        this.button_delete = "Eliminar Empleado";
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log("Componente cargado..");
        this.actualPage();
    }

    actualPage()
    {
        this._route.params.subscribe(params => {
            let page = + params['page'];
            this.page = page;

            if(!params['page'])
            {
                page = 1;
            }

            if(!page)
            {
                page = 1;
            }
            else
            {
                this.next_page = page + 1;
                this.prev_page = page - 1;

                if(this.prev_page <= 0 )
                {
                    this.prev_page = 1;
                }
            }

            //Devolver listado de bloques 
            this.getEmployees(page);
        });
    }

    getEmployees(page)
    {
        this._employeeService.getEmployees(page).subscribe(
            response => {
                if(response.employees)
                {
                    console.log(response);
                    this.total = response.total;
                    this.employees = response.employees;
                    this.pages = response.pages;
                    if(page > this.pages)
                    {
                        this._router.navigate(['/empleados', 1]);
                    }
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