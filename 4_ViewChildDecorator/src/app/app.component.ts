import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChildDecorator';

  @ViewChild('dobInput') DateOfBirth : ElementRef;
  @ViewChild('ageInput') age: ElementRef;
  @ViewChild(DemoComponent, {static: true}) democomp : DemoComponent;

  calculateAge() {
    let year = new Date(this.DateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    this.age.nativeElement.value = currentYear - year;

    // console.log(this.DateOfBirth);
    // console.log(this.age);
  }
}
