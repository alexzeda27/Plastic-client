import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Mobility } from '../../models/mobility';
import { MobilityService } from '../../services/mobility.service';
import { DepartmentMobility } from '../../models/departmentMobilityDate';
import { DepartmentMobilityService } from '../../services/departmentMobilityDate.service';
import { SquareMobility } from '../../models/squareMobilityDate';
import { SquareMobilityService } from '../../services/squareMobility.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'mostrar-movilidad-final',
    templateUrl: './mostrar-movilidad-final.component.html',
    providers: [EmployeeService ,MobilityService, DepartmentMobilityService ,SquareMobilityService, SquareService]
})
export class MostrarMovilidadFinalComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public employee: Employee;
    public mobility: Mobility;
    public departmentMobility: DepartmentMobility;
    public squareMobility: SquareMobility;
    public square: Square;
    public identity;
    public identityEmployee;
    public token;
    public status: string;
    public url: string;
    public page;
    public next_page;
    public prev_page;
    public total;
    public pages;
    public mobilities;
    public squares;
    public button_agregar;
    public button_consultar;
    public id;
    public hora;
    public minutes;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _mobilityService: MobilityService,
        private _departmentMobilityService: DepartmentMobilityService,
        private _squareMobilityService: SquareMobilityService,
        private _squareService: SquareService
    )
    {
        this.title = "Registros de Movilidad";
        this.button_update = "Comenzar registro";
        this.button_delete = "Consultar registros";
        this.url = GLOBAL.url;
        this.employee = this._employeeService.getIdentity();
        this.identityEmployee = this.employee;

        this.button_consultar = "Descargar Gráfico";

        this.hora = new Date().getHours();
        this.minutes = new Date().getMinutes();
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
        this.getDepartmentMobility();
        this.identity = this._employeeService.getIdentity();
        console.log(this.hora);
        
    }

    getDepartmentMobility()
    {
        this._mobilityService.getMobilities().subscribe(
            response => {
                if(response.mobilities)
                {
                    console.log(response.mobilities);
                    this.mobility = response.mobilities;

                    console.log(this.mobility);
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