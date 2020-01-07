import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';

@Component({
    selector: 'register-department',
    templateUrl: './register-department.component.html',
    providers: [DepartmentService]
})
export class RegisterDepartmentComponent implements OnInit
{
    public title: string;
    public department: Department;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _departmentService: DepartmentService
    )
    {
        this.title = 'Registrar Departamento';
        this.department = new Department("", "");
    }

    ngOnInit()
    {
        console.log('Componente cargado con exito');
    }

    onSubmit(form)
    {
        this._departmentService.register(this.department).subscribe(
            response => {
                if(response.department && response.department._id)
                {
                    console.log(response.department);
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
}