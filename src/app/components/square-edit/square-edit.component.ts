import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'square-edit',
    templateUrl: './square-edit.component.html',
    providers: [SquareService]
})
export class SquareEditComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public square: Square;
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _squareService: SquareService
    )
    {
        this.title = "Actualizar bloque";
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
    }

    onSubmit()
    {
        console.log(this.square);
        this._squareService.updateSquare(this.square).subscribe(
            response => {
                if(!response.square){
                    console.log('Marca aqui');
                    this.status = 'error';
                }
                else
                {
                    this.status = 'success';
                }
            },
            error => {
                var errorMessage = <any>error;

                if(errorMessage != null)
                {
                    console.log('Marca aqui 2');
                    this.status = 'error';
                }
            }
        );
    }
}