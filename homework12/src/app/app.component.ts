import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <p>
        Counter Component:
        <app-counter (counterEmitter)="counterChange($event)">></app-counter>
      </p>
      <p>Component Counter Value:{{counter}}</p>
  `
})
export class AppComponent {
  title = 'homework12';

  public counter:number = 0;


  counterChange(counterValue) {
    this.counter = counterValue;
    console.log("counterChange method");
  }


}
