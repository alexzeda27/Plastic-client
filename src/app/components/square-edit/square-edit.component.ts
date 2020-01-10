import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    public square: Square;
    public identity;
    public token;
    public status;
    public url;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _squareService: SquareService
    )
    {
        this.title = "Actualizar Bloque";
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log("Componente cargado..");
    }
}