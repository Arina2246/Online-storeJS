import CONSTANTS from "../../../constants/constants";

class FilterByPopularity {
  filterByPopularity: HTMLElement | null;
  constructor() {
    this.filterByPopularity = document.getElementById("filter-popularity");
  }
  private createFilter(n: number) {
    const elemContent = `<button class="${CONSTANTS.POPULARITY_ARR[n]}">${CONSTANTS.POPULARITY_ARR[n]}</button>`;
    this.filterByPopularity?.insertAdjacentHTML("beforeend", elemContent);
  }
  public filterDrawing() {
    for (let i = 0; i < CONSTANTS.POPULARITY_ARR.length; i += 1) {
      this.createFilter(i);
    }
  }
}
export default FilterByPopularity;
