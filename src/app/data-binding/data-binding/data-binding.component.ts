import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services-dependency/services-dependency/employee.service'

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
name:string;
public employees:any =[];
constructor(private _employeeService : EmployeeService){
  this.employees = _employeeService.getEmployees();
}

  ngOnInit(): void {
  }

}
