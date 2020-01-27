import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

//Cargamos componentes
import { AppComponent } from './app.component';
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
import { CreateRegisterMobilityComponent } from './components/create-register-mobility/create-register-mobility.component';
import { RegisterMobilityComponent } from './components/registers-mobility/registers-mobility.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateOperatorComponent } from './components/create-operator/create-operator.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { CreateMobilityComponent } from './components/create-mobility/create-mobility.component';
import { MobilityDepartmentComponent } from './components/mobility-department/mobility-department.component';
import { MobilityRegisterComponent } from './components/mobility-register/mobility-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    HumanResourcesComponent,
    RegisterDepartmentComponent,
    RegisterPositionComponent,
    ProductionComponent,
    MobilityComponent,
    CreateSquareComponent,
    SquareDepartmentsComponent,
    SquaresComponent,
    EmployeeEditComponent,
    EmployeesComponent,
    DepartmentsComponent,
    CreateMachineComponent,
    MachinesComponent,
    SecurityComponent,

    ExportExcel,
    CreateRegisterMobilityComponent,
    RegisterMobilityComponent,
    CreateCustomerComponent,
    CreateProductComponent,
    CreateOperatorComponent,
    OperatorsComponent,
    CreateMobilityComponent,
    MobilityDepartmentComponent,
    MobilityRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
