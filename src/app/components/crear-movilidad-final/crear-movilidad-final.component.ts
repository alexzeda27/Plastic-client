import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Mobility } from '../../models/mobility';
import { MobilityService } from '../../services/mobility.service';
import { SquareMobility } from '../../models/squareMobilityDate';
import { SquareMobilityService } from '../../services/squareMobility.service';
import { Machine } from '../../models/machine';
import { MachineService } from '../../services/machine.service';
import { Operator } from '../../models/operator';
import { OperatorService } from '../../services/operator.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';


@Component({
    selector: 'crear-movilidad-final',
    templateUrl: './crear-movilidad-final.component.html',
    providers: [MobilityService, SquareMobilityService, MachineService, OperatorService, ProductService]
})
export class CreateMobilityFinalComponent implements OnInit
{
    public title: string;
    public mobility: Mobility;
    public squareMobility: SquareMobility;
    public machine: Machine;
    public operator: Operator;
    public product: Product;
    public status: string;
    public id;
    public url: string;
    public squareMobilities;
    public machines;
    public operators;
    public products;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _mobilityService: MobilityService,
        private _squareMobilityService: SquareMobilityService,
        private _machineService: MachineService,
        private _operatorService: OperatorService,
        private _productService: ProductService
    )
    {
        this.title = "Registro de movilidad";
        this.mobility = new Mobility("", "", "", "", "", "", "",);
    }

    ngOnInit()
    {
        console.log("Component cargado..");
        this.getSquareMobilities();
        this.getMachines();
        this.getOperators();
        this.getProducts();
    }


    onSubmit(form)
    {
        this._mobilityService.register(this.mobility).subscribe(
            response => {
                console.log(response.mobility);
                if(response.mobility && response.mobility._id)
                {
                    console.log(response.mobility);

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
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                    });

                    form.reset();
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    //Obtener Bloques
    getSquareMobilities()
    {
        this._squareMobilityService.getSquareMobility().subscribe(
            response => {
                if(response.squareMobilities)
                {
                    this.squareMobility = response.squareMobilities;

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

    //Obtener Maquinas
    getMachines()
    {
        this._machineService.getMachinesOnly().subscribe(
            response => {
                if(response.machines)
                {
                    this.machine = response.machines;
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

    //Obtener Operadores
    getOperators()
    {
        this._operatorService.getOperators().subscribe(
            response => {
                if(response.operators)
                {
                    this.operator = response.operators;
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

    //Obtener Productos
    getProducts()
    {
        this._productService.getProductsOnly().subscribe(
            response => {
                if(response.products)
                {
                    this.product = response.products;

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