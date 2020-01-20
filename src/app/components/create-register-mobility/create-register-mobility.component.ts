import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';

@Component({
    selector: 'create-register-mobility',
    templateUrl: './create-register-mobility.component.html',
    providers: [RegisterService]
})
export class CreateRegisterMobilityComponent implements OnInit
{
    public title: string;
    public register: Register;
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _registerService: RegisterService
    )
    {
        this.title = "Crear Registro";
        this.register = new Register("", "", "", "");
    }

    ngOnInit()
    {
        console.log("Component cargado..");
    }

    onSubmit(form)
    {
        console.log(this.register);
        this._registerService.register(this.register).subscribe(
            response => {
                if(response.register && response.register._id)
                {
                    console.log(response.register);
                    this.status = 'success';
                    form.reset();
                }
                else
                {
                    this.status = 'error';
                }
            },      
            error => {
                console.log(<any>error);
            }            
        );
    }
}