import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
    selector: 'create-product',
    templateUrl: './create-product.component.html',
    providers: [ProductService, CustomerService]
})
export class CreateProductComponent implements OnInit
{
    public title: string;
    public product: Product;
    public customer: Customer[];
    public identity;
    public token;
    public status: string;
    public url: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService,
        private _customerService: CustomerService
    )
    {
        this.title = "Crear producto";
        this.product = new Product("", "", "", "", "");
    }

    ngOnInit()
    {
        console.log("Component cargado..");
        this.getCustomers();
    }

    onSubmit(form)
    {
        this._productService.register(this.product).subscribe(
            response => {
                if(response.product && response.product._id)
                {
                    console.log(response.product);

                    Swal.fire({
                        icon: 'success',
                        title: '¡Correcto!',
                        text: 'Registro guardado correctamente.',
                        footer: '<a href="/productos">Ver registros aquí</a>'
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

    getCustomers()
    {
        this._customerService.getCustomers().subscribe(
            response => {
                if(response.customers)
                {
                    console.log(response.customers);
                    this.customer = response.customers;

                    console.log(this.customer);
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

