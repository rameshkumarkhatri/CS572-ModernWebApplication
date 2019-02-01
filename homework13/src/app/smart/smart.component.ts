import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';
// import { DumbComponent } from './dumb/dumb.component';
@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
  public arrayToDumb: String[];
  constructor() {
    this.arrayToDumb = ["Hello", "Hi", "Bye", "Tata"]
  }

  ngOnInit() {
    this.emitValue();
  }

  @Output() arrayEmitter = new EventEmitter();

  emitValue() {
    console.log("emit method");
    this.arrayEmitter.emit(this.arrayToDumb);
  }

  isVisible: boolean = false;
  changeIsVisible(){

  }


}
