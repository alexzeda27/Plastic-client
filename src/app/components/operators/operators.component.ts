import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Operator } from '../../models/operator';
import { OperatorService } from '../../services/operator.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'operators',
    templateUrl: './operators.component.html',
    providers: [OperatorService]
})
export class OperatorsComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public operator: Operator;
    public identity;
    public token;
    public status: string;
    public url: string;
    public page;
    public next_page;
    public prev_page;
    public total;
    public pages;
    public operators;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _operatorService: OperatorService,
    )
    {
        this.title = "Operadores";
        this.button_update = "Actualizar Bloque";
        this.button_delete = "Eliminar Bloque";
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
        this.getOperators();
    }

    getOperators()
    {
        this._operatorService.getOperators().subscribe(
            response => {
                if(response.operators)
                {
                    console.log(response.operators);
                    this.operator = response.operators;

                    console.log(this.operator);
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