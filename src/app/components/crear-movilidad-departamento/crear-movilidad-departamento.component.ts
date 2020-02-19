import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MobilityDate } from '../../models/mobilityDate';
import { MobilityDateService } from '../../services/mobilityDate.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { Month } from '../../models/month';
import { MonthService } from '../../services/month.service';
import { DepartmentMobility } from '../../models/departmentMobilityDate';
import { DepartmentMobilityService } from '../../services/departmentMobilityDate.service';

@Component({
    selector: 'crear-movilidad-departamento',
    templateUrl: './crear-movilidad-departamento.component.html',
    providers: [MobilityDateService, DepartmentService, MonthService, DepartmentMobilityService]
})
export class CreateMobilityDepartmentComponent implements OnInit
{
    public title: string;
    public mobilityDate: MobilityDate;
    public mobilityDepartment: DepartmentMobility;
    public month: Month;
    public department: Department[];
    public status: string;
    public id;
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _mobilityService: MobilityDateService,
        private _departmentService: DepartmentService,
        private _monthService: MonthService,
        private _mobilityDepartmentService: DepartmentMobilityService
    )
    {
        this.title = "Asignar departamento de movilidad";
        this.mobilityDepartment = new DepartmentMobility("", "", "");

        this.department = [
            {_id: "5e017a457c253c4c0f44a353", departmentName: "imd inyeccion nave 1"},
            {_id: "5e017b337c253c4c0f44a35f", departmentName: "ptl ensamble"},
            {_id: "5e017bbe7c253c4c0f44a365", departmentName: "ptl pintura"},
            {_id: "5e017c237c253c4c0f44a36a", departmentName: "ptl unidad de inyeccion 1"},
            {_id: "5e017c347c253c4c0f44a36b", departmentName: "ptl unidad de inyeccion 2"},
            {_id: "5e017c3a7c253c4c0f44a36c", departmentName: "ptl unidad de inyeccion 3"}
        ]
        
    }

    ngOnInit()
    {
        console.log("Component cargado..");
        this.getMobilityDates();

    }


    onSubmit(form)
    {
        this._mobilityDepartmentService.register(this.mobilityDepartment).subscribe(
            response => {
                if(response.mobilityDepartment && response.mobilityDepartment._id)
                {
                    console.log(response.mobilityDepartment);

                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/mostrar-departamentos-movilidad">Ver registros aquí</a>'
                    });

                    
                    
                    form.reset();
                }
                else
                {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/mostrar-departamentos-movilidad">Ver registros aquí</a>'
                    });
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getMobilityDates()
    {
        this._mobilityService.getMobilityDate().subscribe(
            response => {
                if(response.mobilityDates)
                {
                    console.log(response.mobilityDates)
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
}