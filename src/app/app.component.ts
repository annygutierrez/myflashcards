import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myflashcards';
  buttonAction = {};

  handleSelection(event: any) {
    this.buttonAction = event;
  }
}
