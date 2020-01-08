import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

//Cargamos componentes
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EmployeeEditComponent,
    ProfileComponent,
    HumanResourcesComponent,
    RegisterDepartmentComponent,
    ProductionComponent,
    DepartmentEditComponent,
    EmployeeQueryComponent,
    MobilityComponent
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
