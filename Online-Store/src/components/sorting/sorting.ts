import "./sorting.css";

class Sorting {
  cardList: NodeListOf<Element>;
  sorting: HTMLElement | null;
  listName: Element[];
  parent: HTMLBodyElement;
  constructor() {
    this.cardList = document.querySelectorAll(".card");
    this.sorting = document.getElementById("sorting");
    this.listName = [];
    this.parent = this.cardList[0].parentNode as HTMLBodyElement;
  }

  private zeroingSort() {
    this.listName = [];
    for (let i = 0; i < this.cardList.length; i++) {
      this.listName.push(this.parent.removeChild(this.cardList[i]));
    }
  }

  private sortAZ() {
    this.zeroingSort();
    const listNameAZ = this.listName.sort(function (a, b) {
      const textA = a.children[0].innerHTML;
      const textB = b.children[0].innerHTML;
      if (textA < textB) return -1;
      if (textA > textB) return 1;
      return 0;
    });
    listNameAZ.forEach((el) => {
      this.parent.appendChild(el);
    });
    return listNameAZ;
  }
  private sortZA() {
    this.listName = [];
    const listNameZA = this.sortAZ();
    listNameZA.reverse();
    listNameZA.forEach((el) => {
      this.parent.appendChild(el);
    });
  }
  private yearAsc() {
    this.zeroingSort();
    const listNameYear = this.listName.sort(function (a, b) {
      const textA = a.children[3].innerHTML;
      const textB = b.children[3].innerHTML;
      if (textA < textB) return -1;
      if (textA > textB) return 1;
      return 0;
    });
    listNameYear.forEach((el) => {
      this.parent.appendChild(el);
    });
    return listNameYear;
  }
  private yearDesc() {
    this.listName = [];
    const listNameYear = this.yearAsc();
    listNameYear.reverse();
    listNameYear.forEach((el) => {
      this.parent.appendChild(el);
    });
  }
  add() {
    this.sorting?.addEventListener("change", (e) => {
      const targ = e.target as HTMLOptionElement;
      const value = targ.value;

      if (value === "sortAZ") {
        this.sortAZ();
      }
      if (value === "sortZA") {
        this.sortZA();
      }
      if (value === "yearAsc") {
        this.yearAsc();
      }
      if (value === "yearDesc") {
        this.yearDesc();
      }
    });
  }
}
export default Sorting;
