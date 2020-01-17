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
    selector: 'squares',
    templateUrl: './squares.component.html',
    providers: [SquareService]
})
export class SquaresComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public employee: Employee;
    public square: Square[];
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
    public squares;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _squareService: SquareService,
    )
    {
        this.title = "Bloques";
        this.button_update = "Actualizar Bloque";
        this.button_delete = "Eliminar Bloque";
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
            this.getSquares(page);
        });
    }

    getSquares(page)
    {
        this._squareService.getSquares(page).subscribe(
            response => {
                if(response.squares)
                {
                    console.log(response);
                    this.total = response.total;
                    this.squares = response.squares;
                    this.pages = response.pages;
                    if(page > this.pages)
                    {
                        this._router.navigate(['/bloques', 1]);
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