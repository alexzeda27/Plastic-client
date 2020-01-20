import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
    selector: 'create-customer',
    templateUrl: './create-customer.component.html',
    providers: [CustomerService]
})
export class CreateCustomerComponent implements OnInit
{
    public title: string;
    public customer: Customer;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _customerService: CustomerService,
    )
    {
        this.title = "Crear Cliente";
        this.customer = new Customer("", "");
    }

    ngOnInit()
    {
        console.log("Component cargado..");
    }

    onSubmit(form)
    {
        this._customerService.register(this.customer).subscribe(
            response => {
                if(response.customer && response.customer._id)
                {
                    console.log(response.customer);

                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/puestos">Ver registros aquí</a>'
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