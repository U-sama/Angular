import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewChecked, OnDestroy {

  @Input() value : string = "procademy";

  constructor(){
    console.log("this is the Constructor!");
    //console.log(this.value);

  }

  ngOnInit(): void {
      console.log("this is NgOnInit!");
      //console.log(this.value);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("this is NgOnChanges!");
    console.log(changes);


  }

  ngDoCheck(): void {
    console.log("this is NgDoCheck!");

  }

  ngAfterContentInit(): void {
    console.log("this is NgAfterContentInit!");

  }
  ngAfterContentChecked(): void {
    console.log("this is NgAfterContentChecked!");
  }

  ngAfterViewChecked(): void {
    console.log("this is ngAfterViewChecked!");

  }

  ngOnDestroy(): void {
    console.log("this is ngOnDestroy!");

  }

}
