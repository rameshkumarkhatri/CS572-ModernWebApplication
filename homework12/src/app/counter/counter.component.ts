import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  // styleUrls: ['./counter.component.css']
  template: `
    <button type="button" (click) = "decrement()">-</button>
    {{counterValue}}
    <button type="button" (click) = "increment()">+</button>
  
  `
})
export class CounterComponent implements OnInit {
  // private counterValue: number = 0;
  
  @Input('counter') counterValue: number;

  increment() {
    this.counterValue++;
    this.emitCounterValue();
  }

  decrement() {
    if (this.counterValue > 0)
    {
      this.counterValue--; 
      this.emitCounterValue();
    } 
  }

  constructor() { 

  }

  ngOnInit() {
    console.log("nginit counter "+" counterValue "+this.counterValue);
    // this.counterValue = this.counter;
    this.emitCounterValue();

  }


  @Output() counterEmitter = new EventEmitter();

  emitCounterValue() {
    console.log("emitCounterValue method");
    this.counterEmitter.emit(this.counterValue);
  }

}
