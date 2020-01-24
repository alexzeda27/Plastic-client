import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { Machine } from '../../models/machine';
import { MachineService } from '../../services/machine.service';
import { Operator } from '../../models/operator';
import { OperatorService } from '../../services/operator.service';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';
import { Mobility } from '../../models/mobility';

@Component({
    selector: 'create-mobility',
    templateUrl: './create-mobility.component.html',
    providers: [DepartmentService, SquareService, MachineService, OperatorService, RegisterService]
})
export class CreateMobilityComponent implements OnInit
{
    public title: string;
    public department: Department[];
    public square: Square[];
    public machine: Machine[];
    public operator: Operator[];
    public register: Register;
    public mobility: Mobility;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _departmentService: DepartmentService,
        private _squareService: SquareService,
        private _machineService: MachineService,
        private _operatorService: OperatorService,
        private _registerService: RegisterService
    )
    {
        this.title = "Crear movilidad";
    }

    ngOnInit()
    {
        console.log("Componente cargado correcatmente");
    }
}