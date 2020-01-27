import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { Operator } from '../../models/operator';
import { OperatorService } from '../../services/operator.service';
import { Machine } from '../../models/machine';
import { MachineService } from '../../services/machine.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Mobility } from '../../models/mobility';
import { MobilityService } from '../../services/mobility.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'mobility-register',
    templateUrl: './mobility-register.component.html',
    providers: [DepartmentService, SquareService, OperatorService, MachineService, ProductService, MobilityService]
})
export class MobilityRegisterComponent implements OnInit
{
    public title: string;
    public button: string;
    public button_save: string;
    public department: Department[];
    public square: Square[];
    public operator: Operator[];
    public machine: Machine[];
    public product: Product[];
    public mobility: Mobility;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _departmentService: DepartmentService,
        private _squareService: SquareService,
        private _operatorService: OperatorService,
        private _machineService: MachineService,
        private _productService: ProductService,
        private _mobilityService: MobilityService
    )
    {
        this.title = "Movilidad";
        
        this.department = [
            {_id: "5e017a457c253c4c0f44a353", departmentName: "imd inyeccion nave 1"},
            {_id: "5e017b337c253c4c0f44a35f", departmentName: "ptl ensamble"},
            {_id: "5e017bbe7c253c4c0f44a365", departmentName: "ptl pintura"},
            {_id: "5e017c237c253c4c0f44a36a", departmentName: "ptl unidad de inyeccion 1"},
            {_id: "5e017c347c253c4c0f44a36b", departmentName: "ptl unidad de inyeccion 2"},
            {_id: "5e017c3a7c253c4c0f44a36c", departmentName: "ptl unidad de inyeccion 3"}
        ];

        this.mobility = new Mobility("", "", "", "", "", "", "", "", "");

        this.button = "Añadir Nuevo";
        this.button_save = "Guardar registro";
    }

    ngOnInit()
    {
        console.log("Componente cargado con exito");
        console.log(this.department);
        this.getSquares();
        this.getOperators();
        this.getMachines();
        this.getProducts();
    }

    getSquares()
    {
        this._squareService.getSquaresOnly().subscribe(
            response => {
                if(response)
                {
                    console.log(response.squares);
                    this.square = response.squares;
                    console.log(this.square)
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
                if(response)
                {
                    console.log(response.machines);
                    this.machine = response.machines;
                    console.log(this.machine)
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

    getProducts()
    {
        this._productService.getProductsOnly().subscribe(
            response => {
                if(response)
                {
                    console.log(response.products);
                    this.product = response.products;
                    console.log(this.product)
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

    getOperators()
    {
        this._operatorService.getOperators().subscribe(
            response => {
                if(response)
                {
                    console.log(response.operators);
                    this.operator = response.operators;
                    console.log(this.operator)
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