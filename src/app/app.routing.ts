import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HumanResourcesComponent } from './components/human-resources/human-resources.component';
import { RegisterDepartmentComponent } from './components/register-department/register-department.component';
import { RegisterPositionComponent } from './components/register-position/register-position.component';
import { ProductionComponent } from './components/production/production.component';
import { CreateSquareComponent } from './components/create-square/create-square.component';
import { SquareDepartmentsComponent } from './components/squares-department/squares-department.component';
import { SquaresComponent } from './components/squares/squares.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CreateMachineComponent } from './components/create-machine/create-machine.component';
import { MachinesComponent } from './components/machines/machines.component';
import { SecurityComponent } from './components/security/security.component';
import { MovilidadComponent } from './components/movilidad/movilidad.component';
import { MostrarMovilidad } from './components/mostrar-movilidad/mostrar-movilidad.component';
import { CreateMobilityDateComponent } from './components/crear-movilidad/crear-movilidad.component';
import { CreateMobilityDepartmentComponent } from './components/crear-movilidad-departamento/crear-movilidad-departamento.component';
import { MostrarMovilidadDepartamentoComponent } from './components/mostrar-movilidad-departamento/mostrar-movilidad-departamento.component';
import { CrearMovilidadBloqueComponent } from './components/crear-movilidad-bloque/crear-movilidad-bloque.component';
import { MostrarMovilidadBloqueComponent } from './components/mostrar-movilidad-bloque/mostrar-movilidad-bloque.component';
import { CreateMobilityFinalComponent } from './components/crear-movilidad-final/crear-movilidad-final.component';
import { MostrarMovilidadFinalComponent } from './components/mostrar-movilidad-final/mostrar-movilidad-final.component';

import { ExportExcel } from './components/xlsx/xlsx.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateOperatorComponent } from './components/create-operator/create-operator.component';
import { OperatorsComponent } from './components/operators/operators.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar-empleado', component: RegisterComponent},
    {path: 'perfil', component: ProfileComponent},
    {path: 'perfil/:payroll', component: ProfileComponent},
    {path: 'recursos-humanos', component: HumanResourcesComponent},
    {path: 'registrar-departamento', component: RegisterDepartmentComponent},
    {path: 'registrar-puesto', component: RegisterPositionComponent},
    {path: 'produccion', component: ProductionComponent},
    {path: 'crear-bloque', component: CreateSquareComponent},
    {path: 'bloques-departamento', component: SquareDepartmentsComponent},
    {path: 'bloques', component: SquaresComponent},
    {path: 'bloques/:page', component: SquaresComponent},
    {path: 'actualizar-empleado', component: EmployeeEditComponent},
    {path: 'actualizar-empleado/:payroll', component: EmployeeEditComponent},
    {path: 'empleados', component: EmployeesComponent},
    {path: 'empleados/:page', component: EmployeesComponent},
    {path: 'departamentos', component: DepartmentsComponent},
    {path: 'departamentos/:page', component: DepartmentsComponent},
    {path: 'crear-maquina', component: CreateMachineComponent},
    {path: 'maquinas', component: MachinesComponent},
    {path: 'maquinas/:page', component: MachinesComponent},
    {path: 'seguridad',component: SecurityComponent},
    {path: 'movilidad',component: MovilidadComponent},
    {path: 'fechas-movilidad', component: MostrarMovilidad},
    {path: 'crear-fecha-movilidad', component: CreateMobilityDateComponent},
    {path: 'crear-departamento-movilidad', component: CreateMobilityDepartmentComponent},
    {path: 'mostrar-departamentos-movilidad', component: MostrarMovilidadDepartamentoComponent},
    {path: 'crear-bloque-movilidad', component: CrearMovilidadBloqueComponent},
    {path: 'mostrar-bloques-movilidad', component: MostrarMovilidadBloqueComponent},
    {path: 'crear-movilidad', component: CreateMobilityFinalComponent},
    {path: 'mostrar-registros-movilidad', component: MostrarMovilidadFinalComponent},
    

    {path: 'exportar-excel', component: ExportExcel},
    {path: 'crear-cliente', component: CreateCustomerComponent},
    {path: 'crear-producto', component: CreateProductComponent},
    {path: 'crear-operador', component: CreateOperatorComponent},
    {path: 'operadores', component: OperatorsComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);