import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit, DoCheck{
  title: string;
  public identity;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService
  )
  {
    this.title = 'PLASTIC APP';
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
