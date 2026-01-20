import { StorageService } from "./storage.js";

export class EventHandlers {
  constructor(uiManager) {
    this.ui = uiManager;
  }

  onAddItemSubmit(e) {
    e.preventDefault();
    const newItem = this.ui.itemInput.value.trim();

    if (!newItem) {
      alert("Please add an item!");
      return;
    }

    if (this.ui.isEditMode) {
      const itemToEdit = this.ui.itemList.querySelector(".edit-mode");
      StorageService.removeItem(itemToEdit.textContent);
      itemToEdit.remove();
    } else if (StorageService.isItemExists(newItem)) {
      alert("That item already exists!");
      return;
    }

    this.ui.addItemToDOM(newItem);
    StorageService.addItem(newItem);
    this.ui.updateUI();
  }

  onClickItem(e) {
    if (e.target.parentElement.classList.contains("remove-item")) {
      this.removeItem(e.target.parentElement.parentElement);
    } else if (e.target.tagName === "LI") {
      this.ui.setEditMode(e.target);
    }
  }

  removeItem(item) {
    if (confirm("Are you sure?")) {
      StorageService.removeItem(item.textContent);
      this.ui.removeItemFromDOM(item);
    }
  }

  clearAllItems() {
    while (this.ui.itemList.firstChild) {
      this.ui.itemList.removeChild(this.ui.itemList.firstChild);
    }
    StorageService.clearAll();
    this.ui.updateUI();
  }

  filterItems(e) {
    this.ui.filterItems(e.target.value);
  }
}
