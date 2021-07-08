import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEmployee]'
})
export class EmployeeDirective 
{
  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string | undefined

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'black'
   }

   @HostListener('mouseover') onMouseOver(){
     this.color ='black'
     this.bgcolor = 'gray'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.color ='black'
    this.bgcolor = 'lightblue'

}
}
