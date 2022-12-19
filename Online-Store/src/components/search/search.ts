import "./search.css";
import CONSTANTS from "../../constants/constants";

class Search {
  search: HTMLInputElement;
  cards: NodeListOf<HTMLElement>;
  close: HTMLInputElement | null;
  help: HTMLBodyElement;

  constructor() {
    this.help = document.querySelector(".search-help") as HTMLBodyElement;
    this.search = document.querySelector("#search") as HTMLInputElement;
    this.cards = document.querySelectorAll(".card");
    this.close = document.querySelector(".close");
  }
  private draw(_cards: Element[] = []) {
    for (let i = 0; i < _cards.length; i++) {
      _cards[i].classList.remove("inactive-card");
    }
  }
  private renderList(_cards: Element[] = []) {
    for (let i = 0; i < _cards.length; i++) {
      _cards[i].classList.add("inactive-card");
    }
  }
  private filter(value: string, list: NodeListOf<Element>) {
    const _cards: Element[] = [];
    for (let i = 0; i < list.length; i++) {
      if (
        !list[i].children[0].innerHTML
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        _cards.push(list[i]);
      }
    }
    return _cards;
  }
  add() {
    this.search?.addEventListener("input", () => {
      const cardArray: Element[] = Array.prototype.slice.call(this.cards);
      const inputValue = this.search?.value as string;
      const filterArr = this.filter(inputValue, this.cards);

      CONSTANTS.COUNT_CARD - filterArr.length === 0
        ? this.help.classList.add("search-help-active")
        : this.help.classList.remove("search-help-active");

      this.draw(cardArray);
      this.renderList(filterArr);
    });
    this.close?.addEventListener("click", () => {
      const cardArray: Element[] = Array.prototype.slice.call(this.cards);
      this.help.classList.remove("search-help-active");
      this.search.value = "";
      this.draw(cardArray);
      this.search?.focus();
    });
  }
}
export default Search;
