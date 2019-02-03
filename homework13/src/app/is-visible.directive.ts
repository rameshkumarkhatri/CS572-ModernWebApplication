import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit{
  @Input() isVisibile: boolean;
  constructor(private element: ElementRef, private renderer2 : Renderer2) {
    // if()
    console.log("offset parent"+element.nativeElement.offsetParent);
    //  == null).style = {}
   }


   @HostListener('click') onClick(){
      this.element.nativeElement.style.backgroundColor = "blue";
      this.element.nativeElement.style.display="none"
   }

   ngOnInit(){
     if(!this.isVisibile) 
     this.element.nativeElement.style.display="none"
    //  else this.element.nativeElement.style.display="none"
   }


}
