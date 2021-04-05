import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'app-services-dependency',
  templateUrl: './services-dependency.component.html',
  styleUrls: ['./services-dependency.component.css']
})
export class ServicesDependencyComponent implements OnInit {
  public employees:any =[];
  constructor(private _employeeService : EmployeeService){
    this.employees = _employeeService.getEmployees();
}


  ngOnInit(): void {
  }

}
