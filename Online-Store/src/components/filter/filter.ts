import FiltersByValue from "./filters-by-value/filter-by-value";
import FiltersByRange from "./filters-by-range/filters-by-range";

class Filter {
  filtersByValue: FiltersByValue;
  filtersByRange: FiltersByRange;
  manufactorerList: string[];
  classList: string[];
  colorList: string[];
  popularityList: string[];
  filterContainer: Element | null;
  maxInputAmount: number;
  minInputAmount: number;
  minInputYear: number;
  maxInputYear: number;
  cards: NodeListOf<Element>;

  constructor() {
    this.filtersByValue = new FiltersByValue();
    this.filtersByRange = new FiltersByRange();
    this.cards = document.querySelectorAll(".card");
    this.manufactorerList = [];
    this.classList = [];
    this.colorList = [];
    this.popularityList = [];
    this.filterContainer = document.querySelector(`.filter`);
    this.minInputAmount = 0;
    this.maxInputAmount = 0;
    this.minInputYear = 0;
    this.maxInputYear = 0;
  }
  addFilterButtons() {
    this.filtersByValue.add();
    this.filtersByRange.add();
  }
  private getFilterValues(elem: HTMLBodyElement, parentId: string) {
    switch (parentId) {
      case "filter-manufactorer":
        this.manufactorerList.indexOf(elem.innerHTML) === -1
          ? this.manufactorerList.push(elem.innerHTML)
          : this.manufactorerList.splice(
              this.manufactorerList.indexOf(elem.innerHTML),
              1
            );
        break;
      case "filter-color":
        this.colorList.indexOf(elem.innerHTML) === -1
          ? this.colorList.push(elem.innerHTML)
          : this.colorList.splice(this.colorList.indexOf(elem.innerHTML), 1);
        break;
      case "filter-class":
        this.classList.indexOf(elem.innerHTML) === -1
          ? this.classList.push(elem.innerHTML)
          : this.classList.splice(this.classList.indexOf(elem.innerHTML), 1);
        break;
      case "filter-popularity":
        this.popularityList.indexOf(elem.innerHTML) === -1
          ? this.popularityList.push(elem.innerHTML)
          : this.popularityList.splice(
              this.popularityList.indexOf(elem.innerHTML),
              1
            );
        break;
    }
    this.minInputAmount = Number(
      document.querySelector(".count-filter-input.left")?.innerHTML
    );
    this.maxInputAmount = Number(
      document.querySelector(".count-filter-input.right")?.innerHTML
    );
    this.minInputYear = Number(
      document.querySelector(".year-filter-input.left")?.innerHTML
    );
    this.maxInputYear = Number(
      document.querySelector(".year-filter-input.right")?.innerHTML
    );
  }
  reset() {
    this.manufactorerList = [];
    this.classList = [];
    this.colorList = [];
    this.popularityList = [];
  }
  add() {
    this.filterContainer?.addEventListener("click", (e) => {
      const elem = e.target as HTMLBodyElement;
      let parentElem = elem;
      let parentId = "";

      if (elem instanceof Element) {
        parentElem = elem.parentNode as HTMLBodyElement;
        parentId = parentElem.id;
      }
      this.getFilterValues(elem, parentId);
      this.deleteCard();
      this.filter();
    });
  }
  private deleteCard() {
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].classList.add("inactive-card-filter");
    }
  }
  drawCard(arr: Element[]) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("inactive-card-filter");
    }
  }
  private filter() {
    let _cards = [...this.cards];
    for (let i = 0; i < this.cards.length; i++) {
      if (this.manufactorerList.length) {
        _cards = _cards.filter((card) =>
          this.manufactorerList.includes(
            card.children[5].innerHTML.slice(
              15,
              card.children[5].innerHTML.length
            )
          )
        );
      }
      if (this.colorList.length) {
        _cards = _cards.filter((card) =>
          this.colorList.includes(
            card.children[4].innerHTML.slice(
              6,
              card.children[4].innerHTML.length
            )
          )
        );
      }
      if (this.classList.length) {
        _cards = _cards.filter((card) =>
          this.classList.includes(
            card.children[6].innerHTML.slice(
              7,
              card.children[6].innerHTML.length
            )
          )
        );
      }
      if (this.popularityList.length) {
        _cards = _cards.filter((card) =>
          this.popularityList.includes(
            card.children[7].innerHTML.slice(
              14,
              card.children[7].innerHTML.length
            )
          )
        );
      }
      _cards = _cards.filter(
        (card) =>
          this.minInputAmount <=
            Number(
              card.children[2].innerHTML.slice(
                12,
                card.children[2].innerHTML.length
              )
            ) &&
          Number(
            card.children[2].innerHTML.slice(
              12,
              card.children[2].innerHTML.length
            )
          ) <= this.maxInputAmount
      );
      _cards = _cards.filter(
        (card) =>
          this.minInputYear <=
            Number(
              card.children[3].innerHTML.slice(
                5,
                card.children[3].innerHTML.length
              )
            ) &&
          Number(
            card.children[3].innerHTML.slice(
              5,
              card.children[3].innerHTML.length
            )
          ) <= this.maxInputYear
      );
    }
    this.drawCard(_cards);
    this.addCardPrompt(_cards);
  }
  addCardPrompt(arr: Element[]) {
    const ContainerPrompt = document.querySelector(
      ".container-prompt"
    ) as Element;
    arr.length === 0
      ? ContainerPrompt.classList.add("container-help-active")
      : ContainerPrompt.classList.remove("container-help-active");
  }
}
export default Filter;
