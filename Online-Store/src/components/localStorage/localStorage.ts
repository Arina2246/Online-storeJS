class LocalStorage {
  storage: Storage;
  cart: HTMLBodyElement;
  constructor() {
    this.storage = localStorage;
    this.cart = document.querySelector(".cart") as HTMLBodyElement;
  }
  setItem(el: string, val: string) {
    this.storage.setItem(el, val);
  }
  reset() {
    document.querySelector(".storage-reset")?.addEventListener("click", () => {
      this.storage.clear();
      document.location.reload();
    });
  }
}
export default LocalStorage;
