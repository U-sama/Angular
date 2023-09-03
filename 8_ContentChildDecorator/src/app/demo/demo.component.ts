import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements  AfterContentChecked{

  @ContentChild('paragraph') newcontent : ElementRef;

  ngAfterContentChecked(): void {
      console.log(this.newcontent.nativeElement.textContent);
  }

}
