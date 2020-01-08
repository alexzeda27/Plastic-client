import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HumanResourcesComponent } from './components/human-resources/human-resources.component';
import { RegisterDepartmentComponent } from './components/register-department/register-department.component';
import { ProductionComponent } from './components/production/production.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { EmployeeQueryComponent } from './components/employee-query/employee-query.component';
import { MobilityComponent } from './components/mobility/mobility.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar-empleado', component: RegisterComponent},
    {path: 'actualizar-empleado', component: EmployeeEditComponent},
    {path: 'perfil/:payroll', component: ProfileComponent},
    {path: 'recursos-humanos', component: HumanResourcesComponent},
    {path: 'registrar-departamento', component: RegisterDepartmentComponent},
    {path: 'produccion', component: ProductionComponent},
    {path: 'actualizar-departamento', component: DepartmentEditComponent},
    {path: 'consultar-empleado', component: EmployeeQueryComponent},
    {path: 'movilidad', component: MobilityComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);