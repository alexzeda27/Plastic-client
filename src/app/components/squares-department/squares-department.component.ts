import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'squares-department',
    templateUrl: './squares-department.component.html',
    providers: [SquareService, DepartmentService]
})
export class SquareDepartmentsComponent implements OnInit
{
    public title: string;
    public button_showInfo: string;
    public employee: Employee;
    public department: Department[];
    public square: Square[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _departmentService: DepartmentService
    )
    {
        this.title = "Bloques - Departamento";
        this.button_showInfo = "Mostrar bloques"

        this.department = [
            {_id: "5e017a457c253c4c0f44a353", departmentName: "imd inyeccion nave 1"},
            {_id: "5e017b337c253c4c0f44a35f", departmentName: "ptl ensamble"},
            {_id: "5e017bbe7c253c4c0f44a365", departmentName: "ptl pintura"},
            {_id: "5e017c237c253c4c0f44a36a", departmentName: "ptl unidad de inyeccion 1"},
            {_id: "5e017c347c253c4c0f44a36b", departmentName: "ptl unidad de inyeccion 2"},
            {_id: "5e017c3a7c253c4c0f44a36c", departmentName: "ptl unidad de inyeccion 3"}
        ]
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
    }

    sumbit()
    {
        
    }
}