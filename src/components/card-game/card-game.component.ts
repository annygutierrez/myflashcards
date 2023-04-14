import { Component, Input, OnChanges } from '@angular/core';

type tplotOptions = {
    [key: string]: string
}

interface CardItem extends tplotOptions {
    russian: string,
    spanish: string,
    english: string,
    sentence: string,
    image: string,
    color: string
}

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent {
  title = 'myflashcards';
  
  activeLanguage: string = 'english';
  showImage = false;
  showSentence = false;
  showColor = false;
  turnAround = false;
  @Input() controlsEvent: any = {};
  deck: CardItem[] = [
      {
          russian: "Весна",
          spanish: "Primavera",
          english: "Spring",
          sentence: "Когда наступает весна, я люблю гулять в парке и наслаждаться ароматом цветущих деревьев",
          image: "https://learnrussianlanguage.net/wp-content/uploads/2018/07/spring-in-russia.jpg",
          color: "#54D556"
      },
      {
        russian: "Глобус",
        spanish: "Globo terraqueo",
        english: "Globe",
        sentence: "Я люблю изучать географию и часто использую глобус, чтобы изучать разные страны и континенты.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Voskhod_spacecraft_IMP_%27Globus%27_navigation_instrument%2C_front_view.jpg",
        color: "#54D3D5"
    },
    {
        russian: "Сухой",
        spanish: "Seco",
        english: "Dry",
        sentence: "На пустынном юге страны сухой климат, среди горных хребтов и песчаных дюн.",
        image: "https://www.meteorologiaenred.com/wp-content/uploads/2020/10/clima-arido-seco.jpg",
        color: "#D5C354"
    }
  ];
  activeCard = 0;

  handleTurnAround() {
      this.turnAround = !this.turnAround;
  }

  swapCard(jump: number) {
    this.activeCard = this.activeCard + jump;
    this.turnAround = false;
  }

  ngOnChanges(changes: any) {
    console.log(changes.controlsEvent.currentValue);
    const newEvent = changes.controlsEvent.currentValue;
    if (newEvent.id === 'color') this.showColor = newEvent.active;
    if (newEvent.id === 'image') this.showImage = newEvent.active;
    if (newEvent.id === 'sentence') this.showSentence = newEvent.active;
    if (newEvent.id === 'russian' || newEvent.id === 'english' || newEvent.id === 'spanish') {
        this.activeLanguage = newEvent.id;
    }
    // const elements = document.querySelectorAll('#' + this.idTable + ' .tabbed-table-body > *');
    // elements.forEach((element, i) => {
    //   const uniqueId = 'id-' + this.idTable + '-tab-body-children-' + i;
    //   if (!element.id || !element.id.includes(uniqueId)) element.setAttribute('id', uniqueId);
    //   const nodeElement = document.getElementById(uniqueId);
    //   if (nodeElement) nodeElement.style.display = 'none';
    // });
    // const element = document.getElementById(elements[changes.activeTab.currentValue].id);
    // if (element) element.style.display = 'block';
  }

}
