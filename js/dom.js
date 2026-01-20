export const DOMHelper = {
  createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
  },

  createButton(classes) {
    const button = document.createElement("button");
    button.className = classes;
    button.appendChild(this.createIcon("fa-solid fa-xmark"));
    return button;
  },

  createListItem(text) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.appendChild(this.createButton("remove-item btn-link text-red"));
    return li;
  },
};
