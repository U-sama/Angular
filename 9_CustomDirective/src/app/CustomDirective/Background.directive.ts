import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[background]'
})
export class SetBackgroundDirective implements OnInit {

  //private element : ElementRef;
  constructor( private element: ElementRef){
    this.element = element;
  }

  ngOnInit(): void {
    this.element.nativeElement.style.background = '#c8e6c9'

  }
}
