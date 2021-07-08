import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component{

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
