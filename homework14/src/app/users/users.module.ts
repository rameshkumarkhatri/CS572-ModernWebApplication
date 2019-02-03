import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


import { UsersComponent } from './users.component';
import { UserDetailsComponent, MyActivateGuard } from './user-details/user-details.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'', component: UsersComponent, 
        children :[
          { path:'details/:uuid', component: UserDetailsComponent, canActivate : [MyActivateGuard] }
        ]
      }
    ])
  ],
  providers:[MyActivateGuard],
  bootstrap:[ UsersComponent]
})
export class UsersModule { }
