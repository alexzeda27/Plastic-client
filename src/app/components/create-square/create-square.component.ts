import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';

@Component({
    selector: 'create-square',
    templateUrl: './create-square.component.html',
    providers: [SquareService]
})
export class CreateSquareComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public square: Square;
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _squareService: SquareService
    )
    {
        this.title = "Crear bloque";
        this.square = new Square("", "");
    }

    ngOnInit()
    {
        console.log("Component cargado..");
    }

    onSubmit(form)
    {
        console.log(this.square);
        this._squareService.create(this.square).subscribe(
            response => {
                if(response.square && response.square._id)
                {
                    console.log(response.square);
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