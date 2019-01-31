import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <p>
        Counter Component:
        <app-counter (counterEmitter)="counterChange($event)" [counter]="9" ></app-counter>
      </p>
      <p>Component Counter Value:{{counter}}</p>
  `
})
export class AppComponent {
  title = 'homework12';

  public counter:number;

  
  counterChange(counterValue) {
    this.counter = counterValue;
    console.log("counterChange method");
  }


}
