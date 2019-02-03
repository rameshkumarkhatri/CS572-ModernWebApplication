import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<h1>Homework 14 Services</h1>
  
  <a [routerLink]="['/']">Home</a><br>
  <a [routerLink]="['users']">Users component</a>
  <router-outlet></router-outlet>
  
  `
  
})
export class AppComponent {
  title = 'homework14';
}
