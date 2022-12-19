import "./filter-by-value.css";
import FilterByManufactorer from "./filter-by-manufacturer";
import FilterByColor from "./filter-by-color";
import FilterByClass from "./filter-by-class";
import FilterByPopularity from "./filter-by-popularity";

class FiltersByValue {
  filterByManufactorer: FilterByManufactorer;
  filterByColor: FilterByColor;
  filterByClass: FilterByClass;
  filterByPopularity: FilterByPopularity;

  constructor() {
    this.filterByManufactorer = new FilterByManufactorer();
    this.filterByColor = new FilterByColor();
    this.filterByClass = new FilterByClass();
    this.filterByPopularity = new FilterByPopularity();
  }
  add() {
    this.filterByManufactorer.filterDrawing();
    this.filterByColor.filterDrawing();
    this.filterByClass.filterDrawing();
    this.filterByPopularity.filterDrawing();

    const buttonContainer = document.querySelector(`.filters-by-value`);
    buttonContainer?.addEventListener("click", (e) => {
      const elem = e.target;
      if (elem instanceof Element && elem.tagName === "BUTTON") {
        elem.classList?.toggle("active-filter-value");
      }
    });
  }
}

export default FiltersByValue;
