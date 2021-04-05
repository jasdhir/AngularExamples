import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard/customer-dashboard.component'
import { DataBindingComponent } from './data-binding/data-binding/data-binding.component'
import { PipesDemoComponent } from './pipes-demo/pipes-demo/pipes-demo.component'
import { AsyncPipeComponent } from './pipes-demo/async-pipe/async-pipe.component'
import { ServicesDependencyComponent } from './services-dependency/services-dependency/services-dependency.component'

const routes: Routes = [
  {path:'customer-dashboard', component: CustomerDashboardComponent},
  {path:'data-binding', component: DataBindingComponent},
  {path:'pipes', component: PipesDemoComponent},
  {path:'async-pipes', component: AsyncPipeComponent},
  {path:'services-di', component: ServicesDependencyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
