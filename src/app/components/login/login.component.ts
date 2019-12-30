import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit
{
    public title: string;

    constructor()
    {
        this.title = 'Inciar Sesión';
    }

    ngOnInit()
    {
        console.log('Componente cargado...');
    }
}