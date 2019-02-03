import { Directive , HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("dblclick") onDoubleClick(){
    console.log(this.elementRef.nativeElement+' element has been clicked');
  }
  

}
