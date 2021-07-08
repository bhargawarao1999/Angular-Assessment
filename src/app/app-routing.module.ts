import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
  {path:'',component:HomeComponent},
  {path:'employee1',component:Employee1Component},
  {path:'employee2',component:Employee2Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
