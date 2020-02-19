import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MobilityDate } from '../../models/mobilityDate';
import { MobilityDateService } from '../../services/mobilityDate.service';
import { DepartmentMobility } from '../../models/departmentMobilityDate';
import { DepartmentMobilityService } from '../../services/departmentMobilityDate.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'mostrar-movilidad',
    templateUrl: './mostrar-movilidad.component.html',
    providers: [MobilityDateService, DepartmentMobilityService, DepartmentService]
})
export class MostrarMovilidad implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public mobilityDate: MobilityDate;
    public departmentMobility: DepartmentMobility;
    public department: Department;
    public identity;
    public token;
    public status: string;
    public url: string;
    public page;
    public next_page;
    public prev_page;
    public total;
    public pages;
    public mobilityDates;
    public departments;
    public button_agregar;
    public button_consultar;
    public id;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _mobilityDateService: MobilityDateService,
        private _departmentMobilityService: DepartmentMobilityService,
        private _departmentService: DepartmentService
    )
    {
        this.title = "Fechas Movilidad";
        this.button_update = "Agregar Bloque";
        this.button_delete = "Consultar Bloques";
        this.url = GLOBAL.url;

        this.button_agregar = "Agregar Departamento";
        this.button_consultar = "Ver Departamentos";
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
        this.getMobility();
        this.getDepartments();
    }

    loadPage()
    {
        this._route.params.subscribe(params => {
            let id = + params['id'];
            this.id = id;

            if(!params['id'])
            {
                id = this.id;
            }

            //Devuelve los datos del empleado
            this.getMobilityDate(id);
        });
    }

    getMobility()
    {
        this._mobilityDateService.getMobilityDate().subscribe(
            response => {
                if(response.mobilityDates)
                {
                    console.log(response.mobilityDates);
                    this.mobilityDate = response.mobilityDates;

                    console.log(this.mobilityDate);
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

    getDepartments()
    {
        this._departmentService.getDepartmentsOnly().subscribe(
            response => {
                if(response.departments)
                {
                    console.log(response.departments);
                    this.department = response.departments;

                    console.log(this.department);
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

    getMobilityDate(id)
    {
        this._mobilityDateService.getMobilityDateId(id).subscribe(
            response => {
                if(response.mobilityDepartment.id)
                {
                    console.log(response);

                    this.departmentMobility = response.mobilityDepartment;
                }
                else
                {
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
            }
        )
    }
}