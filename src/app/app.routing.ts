import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HumanResourcesComponent } from './components/human-resources/human-resources.component';
import { RegisterDepartmentComponent } from './components/register-department/register-department.component';
import { ProductionComponent } from './components/production/production.component';
import { MobilityComponent } from './components/mobility/mobility.component';
import { CreateSquareComponent } from './components/create-square/create-square.component';
import { SquaresComponent } from './components/squares/squares.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CreateMachineComponent } from './components/create-machine/create-machine.component';
import { MachinesComponent } from './components/machines/machines.component';
import { ExportExcel } from './components/xlsx/xlsx.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar-empleado', component: RegisterComponent},
    {path: 'perfil/:payroll', component: ProfileComponent},
    {path: 'recursos-humanos', component: HumanResourcesComponent},
    {path: 'registrar-departamento', component: RegisterDepartmentComponent},
    {path: 'produccion', component: ProductionComponent},
    {path: 'movilidad', component: MobilityComponent},
    {path: 'crear-bloque', component: CreateSquareComponent},
    {path: 'bloques', component: SquaresComponent},
    {path: 'bloques/:page', component: SquaresComponent},
    {path: 'empleados', component: EmployeesComponent},
    {path: 'empleados/:page', component: EmployeesComponent},
    {path: 'departamentos', component: DepartmentsComponent},
    {path: 'departamentos/:page', component: DepartmentsComponent},
    {path: 'crear-maquina', component: CreateMachineComponent},
    {path: 'maquinas', component: MachinesComponent},
    {path: 'maquinas/:page', component: MachinesComponent},
    {path: 'exportar-excel', component: ExportExcel}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);