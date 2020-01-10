import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Machine } from '../../models/machine';
import { MachineService } from '../../services/machine.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'machines',
    templateUrl: './machines.component.html',
    providers: [MachineService]
})
export class MachinesComponent implements OnInit
{
    public title: string;
    public button_update: string;
    public button_delete: string;
    public employee: Employee;
    public machine: Machine[];
    public identity;
    public token;
    public status: string;
    public url: string;
    public page;
    public next_page;
    public prev_page;
    public total;
    public pages;
    public machines;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _machineService: MachineService
    )
    {
        this.title = "Maquinas";
        this.button_update = "Actualizar Maquina";
        this.button_delete = "Eliminar Maquina";
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log("Componente cargado...");
        this.actualPage();
    }

    actualPage()
    {
        this._route.params.subscribe(params => {
            let page = + params['page'];
            this.page = page;

            if(!params['page'])
            {
                page = 1;
            }

            if(!page)
            {
                page = 1;
            }
            else
            {
                this.next_page = page + 1;
                this.prev_page = page - 1;

                if(this.prev_page <= 0 )
                {
                    this.prev_page = 1;
                }
            }

            //Devolver listado de maquinas 
            this.getMachines(page);
        });
    }

    getMachines(page)
    {
        this._machineService.getMachines(page).subscribe(
            response => {
                if(response.machines)
                {
                    console.log(response);
                    this.total = response.total;
                    this.machines = response.machines;
                    this.pages = response.pages;
                    if(page > this.pages)
                    {
                        this._router.navigate(['/maquinas', 1]);
                    }
                }
                else
                {
                    this.status = 'error';
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