import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'employee-edit',
    templateUrl: './employee-edit.component.html',
    providers: [EmployeeService, UploadService]
})
export class EmployeeEditComponent implements OnInit{
    public title: string;
    public button: string;
    public employee: Employee;
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _uploadService: UploadService
    )
    {
        this.title = 'Actualizar empleado';
        this.button = "Actualizar empleado";
        this.employee = this._employeeService.getIdentity();
        this.identity = this.employee;
        this.token = this._employeeService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        console.log('Componente cargado...');
    }

    onSubmit()
    {
        console.log(this.employee);
        this._employeeService.updateEmployee(this.employee).subscribe(
            response => {
                if(!response.employee){
                    console.log('Marca aqui');
                    this.status = 'error';
                }
                else
                {
                    this.status = 'success';
                    localStorage.setItem('identity', JSON.stringify(this.employee));
                    this.identity = this.employee;

                    //Subida de imágen de empleados 
                    this._uploadService.makeFileRequest(this.url + 'cargar-imagen/' + this.employee.payroll, [], this.filesToUpload, /*this.token,*/ 'image')
                            .then((result: any) => {
                                this.employee.image = result.employee.image;
                                localStorage.setItem('identity', JSON.stringify(this.employee));
                            });
                }
            },
            error => {
                var errorMessage = <any>error;

                if(errorMessage != null)
                {
                    console.log('Marca aqui 2');
                    this.status = 'error';
                }
            }
        );
    }

    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any)
    {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    redirection()
    {
        this._router.navigate(['/login']);
    }   
}