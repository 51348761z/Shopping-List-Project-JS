# 🛒 Shopping List

A modern, interactive shopping list application built with vanilla JavaScript ES6+ modules, demonstrating clean code architecture and best practices.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://shopping-list-project-js.vercel.app/)

## ✨ Features

- ✅ Add and remove items with instant feedback
- 🔍 Real-time search filtering
- ✏️ Edit existing items inline
- 💾 Persistent storage using localStorage
- 📱 Responsive design for all devices
- ⚡ Fast and lightweight - no frameworks required

## 🚀 Live Demo

**[View Live Application](https://shopping-list-project-js.vercel.app/)**

## 🛠️ Technologies

- **JavaScript ES6+** - Modules, Classes, Arrow Functions
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox
- **localStorage API** - Client-side data persistence
- **Font Awesome** - Icon library

## 📦 Project Structure

```plain
├── index.html
├── style.css
└── js/                # Modular architecture
    ├── app.js         # Entry point & initialization
    ├── storage.js     # localStorage operations
    ├── dom.js         # DOM manipulation utilities
    ├── ui.js          # UI state management
    └── EventHandlers.js  # Event handling logic
```

## 🎯 Learning Objectives

This project demonstrates:

- **Separation of Concerns** - Modular code organization
- **ES6 Modules** - Import/export syntax
- **DOM Manipulation** - Creating and managing elements
- **Event Delegation** - Efficient event handling
- **Local Storage** - Data persistence
- **Responsive Design** - Mobile-first approach

## 💻 Running Locally

1. Clone the repository:

```bash
git clone https://github.com/51348761z/Shopping-List-Project-JS
```

2. Navigate to the project directory:

```bash
cd Shopping-List-Project-JS
```

3. Open with a local server (required for ES6 modules):

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or use VS Code Live Server extension
```

4. Visit `http://localhost:8000` in your browser

## 📝 Usage

1. **Add Item** - Type an item name and click "Add Item"
2. **Edit Item** - Click on any item to enter edit mode
3. **Remove Item** - Click the ❌ icon next to an item
4. **Filter Items** - Use the search box to filter the list
5. **Clear All** - Remove all items at once

## 📚 Concepts Applied

- Event Bubbling & Delegation
- CRUD Operations
- State Management
- Error Handling & Validation

---

**Note:** This is a learning project created for educational purposes and portfolio demonstration.
