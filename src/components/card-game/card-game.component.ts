import { Component, Input, OnChanges } from '@angular/core';

type tplotOptions = {
    [key: string]: string | number | undefined
}

interface CardItem extends tplotOptions {
    russian: string,
    spanish: string,
    english: string,
    sentence: string,
    image: string,
    color: string,
    strong?: number,
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
  @Input() shuffleEvent: number = 0;
  deck: CardItem[] = [
      {
          russian: "Весна",
          strong: 5,
          spanish: "Primavera",
          english: "Spring",
          sentence: "Когда наступает весна, я люблю гулять в парке и наслаждаться ароматом цветущих деревьев",
          image: "https://learnrussianlanguage.net/wp-content/uploads/2018/07/spring-in-russia.jpg",
          color: "#54D556"
      },
      {
        russian: "Глобус",
        strong: 3,
        spanish: "Globo terraqueo",
        english: "Globe",
        sentence: "Я люблю изучать географию и часто использую глобус, чтобы изучать разные страны и континенты.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Voskhod_spacecraft_IMP_%27Globus%27_navigation_instrument%2C_front_view.jpg",
        color: "#54D3D5"
    },
    {
        russian: "Сухой",
        strong: 4,
        spanish: "Seco",
        english: "Dry",
        sentence: "На пустынном юге страны сухой климат, среди горных хребтов и песчаных дюн.",
        image: "https://www.meteorologiaenred.com/wp-content/uploads/2020/10/clima-arido-seco.jpg",
        color: "#D5C354"
    },
    {
        russian: "Всегда",
        strong: 6,
        spanish: "Siempre",
        english: "Always",
        sentence: "Всегда будь счастлив!",
        image: "https://i.pinimg.com/originals/c8/b4/dc/c8b4dc584a1944a8c4a7fda4426ab489.jpg",
        color: "#b7b7b7"
    },
    {
        russian: "Позавчера",
        strong: 9,
        spanish: "Antes de ayer",
        english: "Two days ago",
        sentence: "Позавчера я отправил важное письмо своему начальнику, но до сих пор не получил ответа.",
        image: "https://i.scdn.co/image/ab67616d0000b2736e8ce88153ad0be30a7994e5",
        color: "#c4c3ae"
    },
    {
        russian: "Насморк",
        strong: 2,
        spanish: "Moqueo",
        english: "Runny nose",
        sentence: "Как только я почувствовал, что начинает появляться насморк, я сразу же начал принимать лекарства от простуды.",
        image: "https://farmiya.ru/images/posts/article_nasmork_i_ego_lechenie.jpg",
        color: "#d1c8c5"
    },
    {
        russian: "Вечно",
        strong: 2,
        spanish: "Por siempre / Constantemente",
        english: "Forever / Constantly",
        sentence: "Он всегда опаздывает, вечно теряет время и никогда не успевает на встречи. - Вечно солнечная погода делает этот город идеальным местом для отдыха.",
        image: "https://proza.ru/pics/2013/07/08/1353.jpg",
        color: "#ffffff"
    },
    {
        russian: "Завтрак",
        strong: 2,
        spanish: "Desayuno",
        english: "Breakfast",
        sentence: "Я обычно ем яичницу на завтрак, но иногда предпочитаю овсянку или йогурт с фруктами.",
        image: "https://avatars.mds.yandex.net/i?id=94818bb3aaac49a7b16888c58b50f088-5391278-images-thumbs&n=13",
        color: "#9a8157"
    },
    {
        russian: "Обед",
        strong: 3,
        spanish: "Almuerzo",
        english: "Lunch",
        sentence: "Как насчёт того, чтобы встретиться на обед в ближайшем кафе и обсудить детали нашего будущего проекта?",
        image: "https://kulinar-63.ru/images/grilled-chicken-breast-fresh-vegetable-salad-tomatoes-cucumbers-lettuce-leaves-chicken-salad-healthy-food.jpg",
        color: "#edd9c6"
    },
    {
        russian: "Ужин",
        strong: 1,
        spanish: "Cena",
        english: "Supper/Dinner",
        sentence: "Сегодня вечером я собираюсь приготовить рыбу на ужин.",
        image: "https://static.1000.menu/img/content/26994/lenivaya-xozyaika_1526223065_5_max.jpg",
        color: "#6480b8"
    },
    {
        russian: "Шашлык",
        strong: 5,
        spanish: "Brocheta / Pincho / Parrilla",
        english: "Skewer / Barbecue",
        sentence: "В прошлые выходные мы приготовили вкусный шашлык на дровах и поели его вместе с друзьями на свежем воздухе.",
        image: "https://e1.edimdoma.ru/data/posts/0002/4755/24755-ed4_wide.jpg?1651762197",
        color: "#713317"
    },
    {
        russian: "Скучно",
        strong: 3,
        spanish: "Aburrido",
        english: "Boring",
        sentence: "Мне скучно сидеть дома в выходной день, я предпочитаю заниматься спортом или гулять на свежем воздухе. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxijv7bnmR4ZTcUg9I_ei27dLR9XwhWawrN8wI1b54oNTBEzLLlfaAnxrJatllupqxgE&usqp=CAU",
        color: "#6d8472"
    },
    {
        russian: "Везде",
        strong: 5,
        spanish: "En todos lados",
        english: "Everywhere",
        sentence: "Я искал свой телефон везде, но не мог найти его нигде.",
        image: "https://images.theconversation.com/files/515234/original/file-20230314-3089-pgw6hr.jpg?ixlib=rb-1.1.0&rect=77%2C0%2C8404%2C4199&q=45&auto=format&w=1356&h=668&fit=crop",
        color: "#e54e5a"
    },
    {
        russian: "Везде",
        strong: 5,
        spanish: "En todos lados",
        english: "Everywhere",
        sentence: "Я искал свой телефон везде, но не мог найти его нигде.",
        image: "https://images.theconversation.com/files/515234/original/file-20230314-3089-pgw6hr.jpg?ixlib=rb-1.1.0&rect=77%2C0%2C8404%2C4199&q=45&auto=format&w=1356&h=668&fit=crop",
        color: "#e54e5a"
    }
  ];
  activeCard = 0;

  handleTurnAround() {
      this.turnAround = !this.turnAround;
  }

  swapCard(jump: number) {
    if ((this.activeCard < (this.deck.length - 1) && jump === 1) || this.activeCard && (jump === -1)) {
        this.activeCard = this.activeCard + jump;
        this.turnAround = false;
    }
    
  }

  shuffle() {
      const newList = [...this.deck];
    let currentIndex = newList.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [newList[currentIndex], newList[randomIndex]] = [
        newList[randomIndex], newList[currentIndex]];
    }
    this.deck = newList;
    // return array;
  }

  ngOnChanges(changes: any) {
    // console.log(changes.controlsEvent.currentValue);
    if (changes.shuffleEvent) this.shuffle();

    
    // console.log('changes.shuffleEvent', changes.shuffleEvent);
    // if (changes.shuffleEvent.currentValue !== this.shuffleEvent) this.shuffle();
    if (changes.controlsEvent) {

        const newEvent = changes.controlsEvent.currentValue;
        if (newEvent.id === 'color') this.showColor = newEvent.active;
        if (newEvent.id === 'image') this.showImage = newEvent.active;
        if (newEvent.id === 'sentence') this.showSentence = newEvent.active;
        if (newEvent.id === 'russian' || newEvent.id === 'english' || newEvent.id === 'spanish') {
            this.activeLanguage = newEvent.id;
        }
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
