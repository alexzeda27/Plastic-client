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
import { MobilityComponent } from './components/mobility/mobility.component';
import { CreateSquareComponent } from './components/create-square/create-square.component';
import { SquareDepartmentsComponent } from './components/squares-department/squares-department.component';
import { SquaresComponent } from './components/squares/squares.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CreateMachineComponent } from './components/create-machine/create-machine.component';
import { MachinesComponent } from './components/machines/machines.component';
import { SecurityComponent } from './components/security/security.component';
import { ExportExcel } from './components/xlsx/xlsx.component';

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
    {path: 'movilidad', component: MobilityComponent},
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
    {path: 'exportar-excel', component: ExportExcel}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);