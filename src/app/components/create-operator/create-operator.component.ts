import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { Machine } from '../../models/machine';
import { MachineService } from '../../services/machine.service';
import { Operator } from '../../models/operator';
import { OperatorService } from '../../services/operator.service';

@Component({
    selector: 'create-operator',
    templateUrl: './create-operator.component.html',
    providers: [EmployeeService, SquareService, MachineService]
})
export class CreateOperatorComponent implements OnInit
{
    public title: string;
    public operator: Operator;
    public employee: Employee[];
    public machine: Machine[];
    public square: Square[];
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _operatorService: OperatorService,
        private _employeeService: EmployeeService,
        private _squareService: SquareService,
        private _machineService: MachineService
    )
    {
        this.title = "Crear Operador";
        this.operator = new Operator("", "", "", "", "");
    }

    ngOnInit()
    {
        console.log("Component cargado..");
        this.getEmployees();
        this.getSquares();
        this.getMachines();
    }

    onSubmit(form)
    {
        this._operatorService.register(this.operator).subscribe(
            response => {
                if(response.operator && response.operator._id)
                {
                    console.log(response.operator);
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/operadores">Ver registros aquí</a>'
                    });
                    form.reset();
                }
                else
                {
                    Swal.fire({
                        icon: 'error',
                        title: '¡Algo salió mal!',
                        text: 'Ocurrió un error al guardar este registro.',
                    });
                }
            },      
            error => {
                console.log(<any>error);
            }            
        );
    }

    getEmployees()
    {
        this._employeeService.getEmployeesOnly().subscribe(
            response => {
                if(response.employees)
                {
                    console.log(response.employees);
                    this.employee = response.employees;

                    console.log(this.employee);
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

    getMachines()
    {
        this._machineService.getMachinesOnly().subscribe(
            response => {
                if(response.machines)
                {
                    console.log(response.machinnes);
                    this.machine = response.machines;

                    console.log(this.machine);
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
