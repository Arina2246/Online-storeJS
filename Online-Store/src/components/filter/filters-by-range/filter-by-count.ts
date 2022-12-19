import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
class FilterByCount {
  inputLeft: HTMLBodyElement | null;
  inputRight: HTMLBodyElement | null;
  constructor() {
    this.inputLeft = document.querySelector(".count-filter-input.left");
    this.inputRight = document.querySelector(".count-filter-input.right");
  }
  filterDrawing() {
    const slider: noUiSlider.target = document.getElementById(
      "count-range-filter"
    ) as noUiSlider.target;

    noUiSlider.create(slider, {
      start: [1, 5],
      connect: true,
      range: {
        min: [1, 1],
        "25": [2, 1],
        "50": [3, 1],
        "75": [4, 1],
        max: [5, 1],
      },
    });
    const inputLeft = document.querySelector(
      ".count-filter-input.left"
    ) as HTMLBodyElement;
    const inputRight = document.querySelector(
      ".count-filter-input.right"
    ) as HTMLBodyElement;

    slider.noUiSlider?.on("update", function (values) {
      const left = values[0] as number;
      const right = values[1] as number;
      inputLeft.innerHTML = `${Math.floor(left)}`;
      inputRight.innerHTML = `${Math.floor(right)}`;
    });
  }
  reset() {
    const slider: noUiSlider.target = document.getElementById(
      "count-range-filter"
    ) as noUiSlider.target;
    slider.noUiSlider?.reset();
  }
}
export default FilterByCount;
