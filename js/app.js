import { EventHandlers } from "./EventHandlers.js";
import { UIManager } from "./ui.js";

class ShoppingListApp {
  constructor() {
    this.ui = new UIManager();
    this.handlers = new EventHandlers(this.ui);
    this.init();
  }

  init() {
    document
      .querySelector(".item-form")
      .addEventListener("submit", (e) => this.handlers.onAddItemSubmit(e));

    this.ui.itemList.addEventListener("click", (e) =>
      this.handlers.onClickItem(e),
    );

    this.ui.clearAllBtn.addEventListener("click", (e) =>
      this.handlers.clearAllItems(e),
    );

    this.ui.itemFilter.addEventListener("input", (e) =>
      this.handlers.filterItems(e),
    );

    // Loading initialzed data
    document.addEventListener("DOMContentLoaded", () => this.ui.displayItems());

    this.ui.updateUI();
  }
}

new ShoppingListApp();
