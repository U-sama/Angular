import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '7_LifeCycleHooks';
  destroy : boolean = true;

  inputvalue : string = '';
  Onclick (inputEl : HTMLInputElement){
    this.inputvalue = inputEl.value;
  }

  ondestroy(){
    this.destroy = !this.destroy;
  }
}
