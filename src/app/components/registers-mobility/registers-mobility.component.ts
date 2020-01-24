import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';
import * as moment from 'moment';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'register-mobility',
    templateUrl: './registers-mobility.component.html',
    providers: [RegisterService]
})
export class RegisterMobilityComponent implements OnInit
{
    public title: string;
    public button: string;
    public button_info: string;
    public register: Register[];
    public registers;
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _registerService: RegisterService,
    )
    {
        this.title = "Registros";
        this.button = "Crear Movilidad"
        this.button_info = "Consultar Movilidad"
        this.url = GLOBAL.url;
        this.registers = this._registerService.getRegisters();
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
        
        this.getRegisters();

        
    }

    getRegisters()
    {
        this._registerService.getRegisters().subscribe(
            response => {
                if(response.registers)
                {
                    console.log(response.registers);
                    this.register = response.registers;

                    console.log(this.register);
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