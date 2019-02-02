import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let emp of employees">
      <li>{{ emp.name }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id" : 1, "name" : "Abhishek Shrivastava", "age" : 31},
    {"id" : 2, "name" : "Amit Shrivastava", "age" : 29},
    {"id" : 3, "name" : "Priyanka Shrivastava", "age" : 27},
  ];

  constructor() { }

  ngOnInit() {
  }

}
