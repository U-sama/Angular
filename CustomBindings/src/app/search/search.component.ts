import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchBoxTxt : string = '';
  @Output()
  searchBoxTxtChanged : EventEmitter<string> = new EventEmitter<string>();

  onSearchBoxTxtChanged() {
    this.searchBoxTxtChanged.emit(this.searchBoxTxt);
  }
}
