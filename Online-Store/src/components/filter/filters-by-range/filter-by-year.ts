import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

class FilterByYear {
  filterDrawing() {
    const slider: noUiSlider.target = document.getElementById(
      "year-range-filter"
    ) as noUiSlider.target;
    noUiSlider.create(slider, {
      start: [1948, 2014],
      connect: true,
      range: {
        min: [1948, 1],
        max: [2014, 1],
      },
    });

    const inputLeft = document.querySelector(
      ".year-filter-input.left"
    ) as HTMLBodyElement;
    const inputRight = document.querySelector(
      ".year-filter-input.right"
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
      "year-range-filter"
    ) as noUiSlider.target;
    slider.noUiSlider?.reset();
  }
}
export default FilterByYear;
