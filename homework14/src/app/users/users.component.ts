import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'users-cmp',
  template: `<p>Users Component ;)</p>
      <ul> 
       <li *ngFor="let user of userData; let i = index"> <a [routerLink]="['details', user.login.uuid]">{{fullName(user)}} </a></li>
      </ul>
      <router-outlet></router-outlet>

  `
         //<li *ngFor="let user of userData; let i = index"> <a href="users/{{i}}">{{fullName(user)}} </a></li>


})
export class UsersComponent implements OnInit{
  userData;
  constructor(private dataService : DataService){
    this.userData = dataService.getCacheData();

  }
  ngOnInit(){

  }

  fullName(user){
    return user.name.title+' '+user.name.first+' '+user.name.last;
  }
}
