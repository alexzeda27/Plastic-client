import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Machine } from '../../models/machine';
import { MachineService } from '../../services/machine.service';

@Component({
    selector: 'create-machine',
    templateUrl: './create-machine.component.html',
    providers: [MachineService]
})
export class CreateMachineComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public machine: Machine;
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _machineService: MachineService
    )
    {
        this.title = "Crear Maquina";
        this.machine = new Machine("", "");
    }

    ngOnInit()
    {
        console.log("Component cargado..");
    }

    onSubmit(form)
    {
        console.log(this.machine);
        this._machineService.create(this.machine).subscribe(
            response => {
                if(response.machine && response.machine._id)
                {
                    console.log(response.machine);
                    this.status = 'success';
                    form.reset();
                }
                else
                {
                    this.status = 'error';
                }
            },      
            error => {
                console.log(<any>error);
            }            
        );
    }
}