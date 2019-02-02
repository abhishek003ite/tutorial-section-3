import { Component, OnInit } from '@angular/core';

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


  public employees = [
    {"id" : 1, "name" : "Abhishek Shrivastava", "age" : 31},
    {"id" : 2, "name" : "Amit Shrivastava", "age" : 29},
    {"id" : 3, "name" : "Priyanka Shrivastava", "age" : 27},
  ];

  constructor() { }

  ngOnInit() {
  }

}
