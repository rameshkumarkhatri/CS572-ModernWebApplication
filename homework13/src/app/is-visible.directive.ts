import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  constructor(private element: ElementRef, private renderer2 : Renderer2) {
    // if()
    console.log("offset parent"+element.nativeElement.offsetParent);
    //  == null).style = {}
   }


   @HostListener('click') onClick(){
      this.element.nativeElement.style.backgroundColor = "blue";
      this.element.nativeElement.style.display="none"


   }


}
