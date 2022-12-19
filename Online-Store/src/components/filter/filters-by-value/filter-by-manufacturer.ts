import CONSTANTS from "../../../constants/constants";

class FilterByManufactorer {
  filterManufactorer: HTMLElement | null;
  constructor() {
    this.filterManufactorer = document.getElementById("filter-manufactorer");
  }
  private createFilter(n: number) {
    const elemContent = `<button class="${CONSTANTS.MANUFACTORER_ARR[n]}">${CONSTANTS.MANUFACTORER_ARR[n]}</button>`;
    this.filterManufactorer?.insertAdjacentHTML("beforeend", elemContent);
  }
  public filterDrawing() {
    for (let i = 0; i < CONSTANTS.MANUFACTORER_ARR.length; i += 1) {
      this.createFilter(i);
    }
  }
}
export default FilterByManufactorer;
