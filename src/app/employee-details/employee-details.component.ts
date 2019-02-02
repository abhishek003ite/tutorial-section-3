import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let emp of employees">
      <li> {{emp.id}}. {{emp.name}} - {{emp.age}} </li>
    </ul> 
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
