import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})

 
export class CustomerDashboardComponent implements OnInit {
  show: boolean = true;
  num:number;
  username:string;
  customers : Customer[] = [
    {id : 234 , name: 'John'},
    {id : 235 , name: 'Adam'},
    {id : 236 , name: 'Nick'}
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
class Customer{
  id:number;
  name:string='';
}