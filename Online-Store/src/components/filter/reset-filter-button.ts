import FilterByYear from "./filters-by-range/filter-by-year";
import FilterByCount from "./filters-by-range/filter-by-count";
import Filter from "./filter";
class ResetFilterButton {
  button: HTMLBodyElement | null;
  filterByYear: FilterByYear;
  filterByCount: FilterByCount;
  manufactorerButtons: HTMLCollection;
  colorButtons: HTMLCollection;
  classButtons: HTMLCollection;
  popularityButtons: HTMLCollection;
  filter: Filter;
  cardList: NodeListOf<Element>;

  constructor(filter: Filter) {
    this.filter = filter;
    this.cardList = document.querySelectorAll(".card");
    this.filterByYear = new FilterByYear();
    this.filterByCount = new FilterByCount();
    this.button = document.querySelector(".filter-reset");
    this.manufactorerButtons = document.getElementById("filter-manufactorer")
      ?.children as HTMLCollection;
    this.colorButtons = document.getElementById("filter-color")
      ?.children as HTMLCollection;
    this.classButtons = document.getElementById("filter-class")
      ?.children as HTMLCollection;
    this.popularityButtons = document.getElementById("filter-popularity")
      ?.children as HTMLCollection;
  }
  add() {
    this.button?.addEventListener("click", () => {
      this.filter.reset();
      this.filterByYear.reset();
      this.filterByCount.reset();
      for (let i = 0; i < this.manufactorerButtons.length; i++) {
        this.manufactorerButtons[i].classList?.remove("active-filter-value");
      }
      for (let i = 0; i < this.colorButtons.length; i++) {
        this.colorButtons[i].classList?.remove("active-filter-value");
      }
      for (let i = 0; i < this.classButtons.length; i++) {
        this.classButtons[i].classList?.remove("active-filter-value");
      }
      for (let i = 0; i < this.popularityButtons.length; i++) {
        this.popularityButtons[i].classList?.remove("active-filter-value");
      }
      for (let i = 0; i < this.cardList.length; i++) {
        this.cardList[i].classList?.remove("inactive-card-filter");
      }
    });
  }
}
export default ResetFilterButton;
