import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
    @Output() buttonSelected = new EventEmitter();
    @Output() shuffleDeck = new EventEmitter();
  title = 'myflashcards';
  listOfButtons = [
      {
          id: 'color',
          label: 'Show Color',
          active: false
      },
      {
        id: 'image',
        label: 'Show Image',
        active: false
      },
      {
        id: 'sentence',
        label: 'Show Sentence',
        active: false
      },
      {
        id: 'english',
        label: 'From English',
        active: true
      },
      {
        id: 'russian',
        label: 'From Russian',
        active: false
      },
      {
        id: 'spanish',
        label: 'From Spanish',
        active: false
      }
  ];

  handleButton(index: number) {
    this.buttonSelected.emit({
        index: index,
        active: !this.listOfButtons[index].active,
        id: this.listOfButtons[index].id
    });
    if (this.listOfButtons[index].id === 'russian' || this.listOfButtons[index].id === 'english' || this.listOfButtons[index].id === 'spanish') {
        // this.listOfButtons[index].active = true;
        const newList = this.listOfButtons.map(item => {
            if (item.id === 'russian' || item.id === 'english' || item.id === 'spanish') {
                return { ...item, active: false };
            }
            return item;
        })
        newList[index].active = true;
        this.listOfButtons = newList;
    } else {
        this.listOfButtons[index].active = !this.listOfButtons[index].active;
    }
    
  }

  shuffle() {
     this.shuffleDeck.emit(Math.random());
  }
}
