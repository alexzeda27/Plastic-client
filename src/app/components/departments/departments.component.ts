import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'squares',
    templateUrl: './departments.component.html',
    providers: [DepartmentService]
})
export class DepartmentsComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public employee: Employee;
    public department: Department[];
    public identity;
    public token;
    public status: string;
    public url: string;
    public page;
    public next_page;
    public prev_page;
    public total;
    public pages;
    public departments;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _departmentService: DepartmentService
    )
    {
        this.title = "Departamentos";
        this.button_update = "Actualizar Departamento";
        this.button_delete = "Eliminar Departamento";
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
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
            this.getDepartments(page);
        });
    }

    getDepartments(page)
    {
        this._departmentService.getDepartments(page).subscribe(
            response => {
                if(response.departments)
                {
                    console.log(response);
                    this.total = response.total;
                    this.departments = response.departments;
                    this.pages = response.pages;
                    if(page > this.pages)
                    {
                        this._router.navigate(['/departamentos', 1]);
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