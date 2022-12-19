import CONSTANTS from "../../../constants/constants";

class FilterByColor {
  filterColor: HTMLElement | null;
  constructor() {
    this.filterColor = document.getElementById("filter-color");
  }
  private createFilter(n: number) {
    const elemContent = `<button class="${CONSTANTS.COLOR_ARR[n]}">${CONSTANTS.COLOR_ARR[n]}</button>`;
    this.filterColor?.insertAdjacentHTML("beforeend", elemContent);
  }
  public filterDrawing() {
    for (let i = 0; i < CONSTANTS.COLOR_ARR.length; i += 1) {
      this.createFilter(i);
    }
  }
}
export default FilterByColor;
