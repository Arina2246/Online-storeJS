import carListX from "../../data/data";
import "./card.css";

interface List {
  img: string;
  car: string;
  count: number;
  year: number;
  color: string;
  manufactorer: string;
  cart: boolean;
  class: string;
  popularity: string;
}
class Card {
  container: HTMLBodyElement;
  constructor() {
    this.container = document.querySelector(".container") as HTMLBodyElement;
  }
  private createCard(n: number, list: List[]) {
    // const elem = carListX[n];
    const elem = list[n];
    const elemContent = `<div class="card">
            <p class="name">${elem.car}</p>
            <img  class='cardImg' src="${elem.img}" alt="ico"/>
            <p>Количество: ${elem.count}</p>
            <p>Год: ${elem.year}</p>
            <p>Цвет: ${elem.color}</p>
            <p>Производитель: ${elem.manufactorer}</p>
            <p>Класс: ${elem.class}</p>
            <p>Популярность: ${elem.popularity}</p>
            <img  class='cardCart' src="/src/img/cart.png" alt="cart"/>
        </div>`;
    this.container.insertAdjacentHTML("beforeend", elemContent);
  }
  public cardDrawing() {
    for (let i = 0; i < carListX.length; i += 1) {
      this.createCard(i, carListX);
    }
  }
}

export default Card;
