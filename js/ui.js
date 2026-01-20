import { DOMHelper } from "./dom.js";
import { StorageService } from "./storage.js";

export class UIManager {
  constructor() {
    this.itemList = document.querySelector("#item-list");
    this.itemInput = document.querySelector("#item-input");
    this.itemFilter = document.querySelector(".filter");
    this.clearAllBtn = document.querySelector("#clear");
    this.formBtn = document.querySelector("button"); // Pick the first button by default
    this.isEditMode = false;
  }

  displayItems() {
    const items = StorageService.getItems();
    items.forEach((item) => this.addItemToDOM(item));
    this.updateUI();
  }

  addItemToDOM(text) {
    const li = DOMHelper.createListItem(text);
    this.itemList.appendChild(li);
  }

  removeItemFromDOM(item) {
    item.remove();
    this.updateUI();
  }

  setEditMode(item) {
    this.isEditMode = true;
    item.classList.add("edit-mode");
    this.formBtn.innerHTML = "<i class='fa-solid fa-pen'></i>  Update Item";
    this.formBtn.style.backgroundColor = "#22b822";
    this.itemInput.value = item.textContent;
  }

  updateUI() {
    this.itemInput.value = "";
    const items = this.itemList.querySelectorAll("li");
    const hasItems = items.length > 0;

    this.clearAllBtn.style.display = hasItems ? "block" : "none";
    this.itemFilter.style.display = hasItems ? "block" : "none";
    this.formBtn.innerHTML = "<i class='fa-solid fa-plus'></i> Add Item";
    this.formBtn.style.backgroundColor = "#333";
  }

  filterItems(text) {
    const items = this.itemList.querySelectorAll("li");
    items.forEach((item) => {
      const itemName = item.textContent.toLowerCase();
      item.style.display = itemName.includes(text.toLowerCase())
        ? "flex"
        : "none";
    });
  }
}
