import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { Position } from '../../models/position';
import { PositionService } from '../../services/position.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [EmployeeService, DepartmentService, PositionService]
})
export class RegisterComponent implements OnInit
{
    public title: string;
    public button: string;
    public employee: Employee;
    public department: Department[];
    public position: Position[];
    public status: string;
    public saveDepartments;
    public departments;
    public id;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _departmentService: DepartmentService,
        private _positionService: PositionService
    )
    {
        this.title = 'Registrar Empleado';
        this.button = 'Registrar'
        this.employee = new Employee("", "", "", "", "", "", "", "", "", "", "", "");
        this.departments = this._departmentService.getDepartments();
    }

    ngOnInit()
    {
        console.log('Componente cargado...');

        this.getDepartments();
        this.getPositions();
    }

    onSubmit(form)
    {
        this._employeeService.register(this.employee).subscribe(
            response => {
                if(response.employee && response.employee._id)
                {
                    console.log(response.employee);

                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/empleados">Ver registros aquí</a>'
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

    redirection()
    {
        this._router.navigate(['/login']);
    }

    getDepartments()
    {
        this._departmentService.getDepartmentsOnly().subscribe(
            response => {
                if(response.departments)
                {
                    console.log(response.departments)
                    this.department = response.departments;

                    console.log(this.department);
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

    getPositions()
    {
        this._positionService.getPositionOnly().subscribe(
            response => {
                if(response.positions)
                {
                    console.log(response.positions);
                    this.position = response.positions;

                    console.log(this.position);
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