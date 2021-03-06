import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Machine } from '../../models/machine';
import { MachineService } from '../../services/machine.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';

@Component({
    selector: 'create-machine',
    templateUrl: './create-machine.component.html',
    providers: [MachineService, SquareService]
})
export class CreateMachineComponent implements OnInit
{
    public title: string;
    public machine: Machine;
    public square: Square[];
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _machineService: MachineService,
        private _squareService: SquareService
    )
    {
        this.title = "Crear Maquina";
        this.machine = new Machine("", "", "");
    }

    ngOnInit()
    {
        console.log("Component cargado..");
        this.getSquares();
    }

    onSubmit(form)
    {
        console.log(this.machine);
        this._machineService.create(this.machine).subscribe(
            response => {
                if(response.machine && response.machine._id)
                {
                    console.log(response.machine);
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/maquinas">Ver registros aquí</a>'
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