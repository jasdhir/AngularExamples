import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { PipesDemoModule } from './pipes-demo/pipes-demo.module';
import { DataBindingModule } from './data-binding/data-binding.module'
import { ServicesDependencyModule } from './services-dependency/services-dependency.module'
import { EmployeeService } from './services-dependency/services-dependency/employee.service'

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CustomerDashboardModule,
    PipesDemoModule,
    DataBindingModule,
    ServicesDependencyModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
