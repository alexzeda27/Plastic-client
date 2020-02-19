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
import { SquareMobility } from '../../models/squareMobilityDate';
import { SquareMobilityService } from '../../services/squareMobility.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';

@Component({
    selector: 'crear-movilidad-bloque',
    templateUrl: './crear-movilidad-bloque.component.html',
    providers: [MobilityDateService, DepartmentService, MonthService, DepartmentMobilityService, SquareMobilityService, SquareService]
})
export class CrearMovilidadBloqueComponent implements OnInit
{
    public title: string;
    public mobilityDate: MobilityDate;
    public departmentMobility: DepartmentMobility;
    public squareMobility: SquareMobility;
    public month: Month;
    public department: Department[];
    public square: Square;
    public status: string;
    public id;
    public url: string;
    public departmentMobilities;
    public squares;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _mobilityService: MobilityDateService,
        private _departmentService: DepartmentService,
        private _monthService: MonthService,
        private _departmentMobilityService: DepartmentMobilityService,
        private _squareMobilityService: SquareMobilityService,
        private _squareService: SquareService
    )
    {
        this.title = "Asignar bloque de movilidad";
        this.squareMobility = new SquareMobility("", "", "");
        
    }

    ngOnInit()
    {
        console.log("Component cargado..");
        this.getDepartmentMobilities();
        this.getSquares();

    }


    onSubmit(form)
    {
        this._squareMobilityService.register(this.squareMobility).subscribe(
            response => {
                if(response.squareMobility && response.squareMobility._id)
                {
                    console.log(response.squareMobility);

                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/mostrar-bloques-movilidad">Ver registros aquí</a>'
                    });

                    
                    
                    form.reset();
                }
                else
                {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/mostrar-bloques-movilidad">Ver registros aquí</a>'
                    });
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getDepartmentMobilities()
    {
        this._departmentMobilityService.getDepartmentMobility().subscribe(
            response => {
                if(response.departmentMobilities)
                {
                    console.log(response.departmentMobilities)
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
        this._squareService.getSquares().subscribe(
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