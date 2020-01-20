import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { GLOBAL } from '../../services/global';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
    selector: 'security',
    templateUrl: './security.component.html',
    providers: [EmployeeService]
})
export class SecurityComponent implements OnInit
{
    public title: string;
    public image1;
    public image2;
    public image3;
    public button;
    public employee: Employee;
    public url;
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService
    )
    {
        this.title = "Seguridad";
        this.url = GLOBAL.url;
        this.button = "Descargar ficha";
        this.image1 = 'assets/add-departments.jpg';
        this.image2 = 'assets/add-employees.png';
        this.image3 = 'assets/add-machine.jpg';
    }

    ngOnInit()
    {
        console.log("Componente Cargado");
    }
}