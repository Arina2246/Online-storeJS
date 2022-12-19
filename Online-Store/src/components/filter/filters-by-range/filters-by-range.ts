import "./filters-by-range.css";
import FilterByCount from "./filter-by-count";
import FilterByYear from "./filter-by-year";

class FiltersByRange {
  filterByCount: FilterByCount;
  filterByYear: FilterByYear;
  constructor() {
    this.filterByCount = new FilterByCount();
    this.filterByYear = new FilterByYear();
  }
  add() {
    this.filterByCount.filterDrawing();
    this.filterByYear.filterDrawing();
  }
}
export default FiltersByRange;
