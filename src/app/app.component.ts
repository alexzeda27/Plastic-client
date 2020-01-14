import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Employee } from './models/employee';
import { EmployeeService } from './services/employee.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit, DoCheck{
  public title: string;
  public identity;
  public identityEmployee;
  public url: string;
  public employee: Employee;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService
  )
  {
    this.title = 'PLASTIC APP';
    this.url = GLOBAL.url;
    this.employee = this._employeeService.getIdentity();
    this.identityEmployee = this.employee;
  }

  ngOnInit()
  {
    this.identity = this._employeeService.getIdentity();
  }

  ngDoCheck()
  {
    this.identity = this._employeeService.getIdentity();
  }

  logout()
  {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/login']);
  }
}
