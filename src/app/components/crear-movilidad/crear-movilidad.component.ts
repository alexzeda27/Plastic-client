import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MobilityDate } from '../../models/mobilityDate';
import { MobilityDateService } from '../../services/mobilityDate.service';
import { Month } from '../../models/month';
import { MonthService } from '../../services/month.service';
import { Week } from '../../models/week';
import { WeekService } from '../../services/week.service';
import { Day } from '../../models/day';
import { DayService } from '../../services/day.service';

@Component({
    selector: 'crear-movilidad',
    templateUrl: './crear-movilidad.component.html',
    providers: [MobilityDateService, MonthService, WeekService, DayService]
})
export class CreateMobilityDateComponent implements OnInit
{
    public title: string;
    public mobilityDate: MobilityDate;
    public month: Month[];
    public week: Week[];
    public day: Day[];
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _mobilityDateService: MobilityDateService,
        private _monthService: MonthService,
        private _weekService: WeekService,
        private _dayService: DayService
    )
    {
        this.title = "Crear fecha de movilidad";
        this.mobilityDate = new MobilityDate("", "", "", "");
        
    }

    ngOnInit()
    {
        console.log("Component cargado..");
        this.getMonths();
        this.getWeeks(),
        this.getDays();
    }

    onSubmit(form)
    {
        console.log(this.mobilityDate);
        this._mobilityDateService.register(this.mobilityDate).subscribe(
            response => {
                if(response.mobilityDate && response.mobilityDate._id)
                {
                    console.log(response.mobilityDate);
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/fechas-movilidad">Ver registros aquí</a>'
                    });
                    form.reset();
                }
                else
                {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/fechas-movilidad">Ver registros aquí</a>',
                    });
                }
            },      
            error => {
                console.log(<any>error);
            }            
        );
    }

    getMonths()
    {
        this._monthService.getMonthsOnly().subscribe(
            response => {
                if(response.months)
                {
                    console.log(response.months);
                    this.month = response.months;

                    console.log(this.month);
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

    getWeeks()
    {
        this._weekService.getWeeks().subscribe(
            response => {
                if(response.weeks)
                {
                    console.log(response.weeks)
                    this.week = response.weeks;

                    console.log(this.week);
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

    getDays()
    {
        this._dayService.getDays().subscribe(
            response => {
                if(response.days)
                {
                    console.log(response.days)
                    this.day = response.days;

                    console.log(this.day);
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