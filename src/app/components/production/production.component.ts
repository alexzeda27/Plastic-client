import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'production',
    templateUrl: './production.component.html'
})
export class ProductionComponent implements OnInit
{
    public title: string;
    public employee: Employee;
    public identity;
    public token;

    constructor(
        private _employeeService: EmployeeService
    )
    {
        this.title = 'Planta - Producción';
    }

    ngOnInit()
    {
        console.log("Componente cargado con exito");
    }
}