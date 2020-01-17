import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Square } from '../../models/square';
import { SquareService } from '../../services/square.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';

@Component({
    selector: 'create-square',
    templateUrl: './create-square.component.html',
    providers: [SquareService]
})
export class CreateSquareComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public square: Square;
    public department: Department[];
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _squareService: SquareService,
    )
    {
        this.title = "Crear bloque";
        this.square = new Square("", "", "");

        this.department = [
            {_id: "5e017a457c253c4c0f44a353", departmentName: "imd inyeccion nave 1"},
            {_id: "5e017b337c253c4c0f44a35f", departmentName: "ptl ensamble"},
            {_id: "5e017bbe7c253c4c0f44a365", departmentName: "ptl pintura"},
            {_id: "5e017c237c253c4c0f44a36a", departmentName: "ptl unidad de inyeccion 1"},
            {_id: "5e017c347c253c4c0f44a36b", departmentName: "ptl unidad de inyeccion 2"},
            {_id: "5e017c3a7c253c4c0f44a36c", departmentName: "ptl unidad de inyeccion 3"}
        ]
    }

    ngOnInit()
    {
        console.log("Component cargado..");
    }

    onSubmit(form)
    {
        console.log(this.square);
        this._squareService.create(this.square).subscribe(
            response => {
                if(response.square && response.square._id)
                {
                    console.log(response.square);
                    
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/bloques">Ver registros aquí</a>'
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