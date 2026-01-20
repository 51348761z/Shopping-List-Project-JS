export const StorageService = {
  getItems() {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : [];
  },

  addItem(item) {
    const items = this.getItems();
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
  },

  removeItem(item) {
    let items = this.getItems();
    items = items.filter((i) => i !== item);
    localStorage.setItem("items", JSON.stringify(items));
  },

  isItemExists(item) {
    return this.getItems().includes(item);
  },

  clearAll() {
    localStorage.clear();
  },
};
