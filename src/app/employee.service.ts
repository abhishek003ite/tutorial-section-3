import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id" : 1, "name" : "Abhishek Shrivastava", "age" : 31},
      {"id" : 2, "name" : "Amit Shrivastava", "age" : 29},
      {"id" : 3, "name" : "Priyanka Shrivastava", "age" : 27},
    ];
  }
}
