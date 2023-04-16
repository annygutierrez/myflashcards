import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myflashcards';
  buttonAction = {};
  shuffleAction: number = 0;

  handleSelection(event: any) {
    this.buttonAction = event;
  }

  handleShuffle(event: any) {
    this.shuffleAction = event;
  }
}
