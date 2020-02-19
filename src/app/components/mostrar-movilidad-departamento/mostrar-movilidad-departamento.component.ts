import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DepartmentMobility } from '../../models/departmentMobilityDate';
import { DepartmentMobilityService } from '../../services/departmentMobilityDate.service';
import { SquareMobility } from '../../models/squareMobilityDate';
import { SquareMobilityService } from '../../services/squareMobility.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'mostrar-movilidad',
    templateUrl: './mostrar-movilidad-departamento.component.html',
    providers: [DepartmentMobilityService, SquareMobilityService, SquareService]
})
export class MostrarMovilidadDepartamentoComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public departmentMobility: DepartmentMobility;
    public squareMobility: SquareMobility;
    public square: Square;
    public identity;
    public token;
    public status: string;
    public url: string;
    public page;
    public next_page;
    public prev_page;
    public total;
    public pages;
    public departmentMobilities;
    public squares;
    public button_agregar;
    public button_consultar;
    public id;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _departmentMobilityService: DepartmentMobilityService,
        private _squareMobilityService: SquareMobilityService,
        private _squareService: SquareService
    )
    {
        this.title = "Departamentos Movilidad";
        this.button_update = "Comenzar registro";
        this.button_delete = "Consultar registros";
        this.url = GLOBAL.url;

        this.button_agregar = "Agregar Bloque";
        this.button_consultar = "Ver Bloques";
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
        this.getDepartmentMobility();
        this.getSquares();
    }

    getDepartmentMobility()
    {
        this._departmentMobilityService.getDepartmentMobility().subscribe(
            response => {
                if(response.departmentMobilities)
                {
                    console.log(response.departmentMobilities);
                    this.departmentMobility = response.departmentMobilities;

                    console.log(this.departmentMobility);
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

    getSquares()
    {
        this._squareService.getSquaresOnly().subscribe(
            response => {
                if(response.squares)
                {
                    console.log(response.squares);
                    this.square = response.squares;

                    console.log(this.square);
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