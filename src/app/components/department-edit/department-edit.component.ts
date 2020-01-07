import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'department-edit',
    templateUrl: './department-edit.component.html',
    providers: [DepartmentService]
})
export class DepartmentEditComponent implements OnInit
{
    public title: string;
    public department: Department;
    public identity;
    public token;
    public status: string;
    public url: string

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _departmentService: DepartmentService
    )
    {
        this.title = "Actualizar Departamento";
    }

    ngOnInit()
    {
        console.log("Componente cargado con exito");
    }
}