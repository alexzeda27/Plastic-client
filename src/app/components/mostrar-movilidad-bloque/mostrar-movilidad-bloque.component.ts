import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SquareMobility } from '../../models/squareMobilityDate';
import { SquareMobilityService } from '../../services/squareMobility.service';
import { Mobility } from '../../models/mobility';
import { MobilityService } from '../../services/mobility.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'mostrar-movilidad-bloque',
    templateUrl: './mostrar-movilidad-bloque.component.html',
    providers: [SquareMobilityService, MobilityService, SquareService]
})
export class MostrarMovilidadBloqueComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public Mobility: Mobility;
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
    public squareMobilities;
    public mobilities;
    public squares;
    public button_agregar;
    public button_consultar;
    public id;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _mobilityService: MobilityService,
        private _squareMobilityService: SquareMobilityService,
        private _squareService: SquareService
    )
    {
        this.title = "Bloques Movilidad";
        this.button_update = "Comenzar registro";
        this.button_delete = "Consultar registros";
        this.url = GLOBAL.url;

        this.button_agregar = "Comenzar Registro";
        this.button_consultar = "Ver Registros";
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
        this.getSquaresMobility();
        this.getSquares();
    }

    getSquaresMobility()
    {
        this._squareMobilityService.getSquareMobility().subscribe(
            response => {
                if(response.squareMobilities)
                {
                    console.log(response.squareMobilities);
                    this.squareMobility = response.squareMobilities;

                    console.log(this.squareMobility);
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