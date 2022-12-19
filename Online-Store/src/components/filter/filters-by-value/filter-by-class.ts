import CONSTANTS from "../../../constants/constants";

class FilterByClass {
  filterClass: HTMLElement | null;
  constructor() {
    this.filterClass = document.getElementById("filter-class");
  }
  private createFilter(n: number) {
    const elemContent = `<button class="${CONSTANTS.CLASS_ARR[n]}">${CONSTANTS.CLASS_ARR[n]}</button>`;
    this.filterClass?.insertAdjacentHTML("beforeend", elemContent);
  }
  public filterDrawing() {
    for (let i = 0; i < CONSTANTS.CLASS_ARR.length; i += 1) {
      this.createFilter(i);
    }
  }
}
export default FilterByClass;
