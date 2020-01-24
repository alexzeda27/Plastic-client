import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'mobility-department',
    templateUrl: './mobility-department.component.html',
    providers: [DepartmentService, SquareService]
})
export class MobilityDepartmentComponent implements OnInit
{
    public title: string;
    public department: Department[];
    public square: Square[];
    public button: string;
    public status;
    public id;
    public url;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _departmentService: DepartmentService,
        private _squareService: SquareService
    )
    {
        this.title = "Elige un departamento";
        this.button = "Comenzar Registro";

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
        console.log("Componente cargado correctamente");
    }

    getSquares()
    {
        this._squareService.getSquaresOnly().subscribe(
            response => {
                if(response)
                {
                    console.log(response.squares)
                    this.square = response.squares
                    console.log(this.square)
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
        )
    }

    getDepartment(id)
    {
        this._departmentService.getDepartment(id).subscribe(
            response => {
                if(response.department)
                {
                    console.log(this.department)
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
        )
    }
}