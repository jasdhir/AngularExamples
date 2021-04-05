import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    CustomerDashboardComponent,
    HighlightDirective
  ],
  exports: [
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerDashboardModule { }
