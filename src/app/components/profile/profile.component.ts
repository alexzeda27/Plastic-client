import { Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    providers: [EmployeeService]
})
export class ProfileComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public button_update: string;
    public button_delete: string;
    public status: string;
    public identity;
    public identityEmployee;
    public token;
    public url;
    public payroll;
    public employees;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService
    )   
    {
        this.title = 'Perfil';
        this.button_update = "Actualizar Empleado";
        this.button_delete = "Eliminar Empleado";
        this.employee = this._employeeService.getIdentity();
        this.identity = this.employee;
        this.token = this._employeeService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log('Componente cargado con exito');
        this.loadPage();
    }

    loadPage()
    {
        this._route.params.subscribe(params => {
            let payroll = + params['payroll'];
            this.payroll = payroll;

            if(!params['payroll'])
            {
                payroll = this.payroll;
            }

            //Devuelve los datos del empleado
            this.getEmployee(payroll);
        });
    }

    getEmployee(payroll)
    {
        this._employeeService.getEmployee(payroll).subscribe(
            response => {
                if(response.employee.payroll)
                {
                    console.log(response);
                    
                    this.employee = response.employee;
                }
                else
                {
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
                this._router.navigate(['/perfil', this.identity.payroll]);
            }
        );
    }

    removeEmployee(payroll)
    {
        console.log(this.payroll);

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Esta operación no se puede revertit",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {

                this._employeeService.removeEmployee(payroll).subscribe(
                    response => {
                        if(response.employee.payroll)
                        {
                            Swal.fire(
                                '¡Eliminado!',
                                'El registro fue eliminado con exito.',
                                'success'
                              )

                            this._router.navigate(['/empleados']);
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
                        var errorMessage = <any>error;
                        console.log(errorMessage);
        
                        if(errorMessage != null)
                        {
                            this.status = 'error';
                        } 
                    }
                )              
            }
        })
    }
}
