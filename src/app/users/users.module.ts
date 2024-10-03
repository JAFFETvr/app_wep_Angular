import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';




@NgModule({
  declarations: [
    UsersDashboardComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule ,
    FormsModule
  ],
  exports : [
    UsersDashboardComponent
  ]
})
export class UsersModule { }
