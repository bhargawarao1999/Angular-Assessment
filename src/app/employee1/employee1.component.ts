import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component {
  searchString: string = '';
  sortString: any = 'a-z';
  employees: any = []
  errMsg: any;
  constructor(employeeService: EmployeeService) {
    employeeService.getEmployeeInfo().subscribe(
      result => this.employees = result,
      error => this.errMsg = error)
  }
}
