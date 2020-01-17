import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Position } from '../../models/position';
import { PositionService } from '../../services/position.service';
import { TypeWorker } from '../../models/typeWorker';
import { CostCenter } from '../../models/costCenter';

@Component({
    selector: 'register-position',
    templateUrl: './register-position.component.html',
    providers: [PositionService]
})
export class RegisterPositionComponent implements OnInit
{
    public title: string;
    public position: Position;
    public typeWorker: TypeWorker[];
    public typeWorkers;
    public costCenters;
    public costCenter: CostCenter[];
    public status: string;
    public onlyMayus;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _positionService: PositionService
    )
    {
        this.title = 'Registrar Puesto';
        this.position = new Position("", "", "", "");
    }

    ngOnInit()
    {
        console.log('Componente cargado con exito');
        
        this.typeWorker = [
            {_id: "5dfc4a582cfe2f2d4c3ad38a", type: "sindicalizado"},
            {_id: "5dfc4b2c2cfe2f2d4c3ad391", type: "no sindicalizado"}
        ];

        this.costCenter = [
            {_id: "5dfc610255cfd6344cc3f247", center: "sueldos"},
            {_id: "5dfc611255cfd6344cc3f248", center: "mano de obra indirecta"},
            {_id: "5dfc611c55cfd6344cc3f249", center: "mano de obra directa"}
        ];

        console.log(this.typeWorker);
        console.log(this.costCenter);
    }

    onSubmit(form)
    {
        this._positionService.register(this.position).subscribe(
            response => {
                if(response.position && response.position._id)
                {
                    console.log(response.position);

                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/puestos">Ver registros aquí</a>'
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

}