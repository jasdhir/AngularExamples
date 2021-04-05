import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDependencyComponent } from './services-dependency/services-dependency.component';



@NgModule({
  declarations: [
    ServicesDependencyComponent
  ],
  exports: [
    ServicesDependencyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesDependencyModule { }
