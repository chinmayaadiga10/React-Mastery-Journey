# ⚡ EV-Olution — Dynamic React Landing Page

A modern, visually rich **React-based landing page** showcasing dynamic background transitions (image ↔ video), smooth UI design, and clean component architecture.

Built as part of a **React mastery journey**, this project focuses on **core UI composition, state-driven rendering, and scalable frontend structure**.

---

## ✨ Features

- 🎥 **Dynamic Background Switching**
  - Seamless toggle between **video and images**
  - Controlled via React state (`playStatus`)

- 🖼️ **Hero Section with Smart Rendering**
  - Changes visuals based on `heroCount`
  - Clean separation of UI and logic

- 🧠 **State-Driven UI**
  - Centralized state management in `App.jsx`
  - Props-driven component communication

- 🎨 **Modern UI/UX**
  - Fullscreen responsive background
  - Clean typography and layout
  - CTA-focused design

- 🧩 **Component-Based Architecture**
  - Modular and scalable structure
  - Easy to extend and maintain

---

## 🛠️ Tech Stack

| Category       | Technology      | Purpose                      | Why Used                           |
| -------------- | --------------- | ---------------------------- | ---------------------------------- |
| **Frontend**   | React (Vite)    | UI development               | Fast, component-based architecture |
| **State Mgmt** | React Hooks     | Manage UI state (`useState`) | Simple and scalable for small apps |
| **Styling**    | CSS3            | Layout & design              | Full control over UI styling       |
| **Build Tool** | Vite            | Dev server & bundling        | Lightning-fast builds              |
| **Media**      | Images + Video  | Background visuals           | Enhances UI experience             |
| **Structure**  | Component-based | Code organization            | Reusable and maintainable          |

---

## 📂 Project Structure

```bash
.
└── EVolution Landing Page/
    ├── public
    ├── src/
    │   ├── assets
    │   ├── components/
    │   │   ├── Background/
    │   │   │   ├── Background.jsx
    │   │   │   └── Background.css
    │   │   ├── Hero/
    │   │   │   ├── Hero.jsx
    │   │   │   └── Hero.css
    │   │   └── Navbar/
    │   │       ├── Navbar.jsx
    │   │       └── Navbar.css
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── README.md
```

---

## 🧠 Core Concept

The project demonstrates a key React pattern:

> **UI = f(state)**

### Example Flow

- `App.jsx` manages:
  - `heroCount`
  - `playStatus`

- These are passed as props:

```js
<Background playStatus={playStatus} heroCount={heroCount} />
```

- `Background.jsx` decides what to render:
  - 🎥 Video → if `playStatus === true`
  - 🖼️ Images → based on `heroCount`

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone

# Navigate into project
cd Evolution Landing Page

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🐛 Key Learning / Bug Fix Highlight

### ❌ Issue

Blank screen due to missing render condition.

### ✅ Fix

Handled all `heroCount` cases and added fallback return.

```js
// Always ensure a component returns something
return <img src={image1} className="background" alt="" />;
```

---

## 🎯 What This Project Demonstrates

- Clean **React fundamentals**
- Strong **component separation**
- Understanding of **conditional rendering**
- UI thinking from a **product perspective**
- Debugging mindset (handling edge cases)

---

## 🔮 Future Improvements

- 🔁 Add auto-slide background transitions
- 🎛️ Add user controls (next/previous)
- 📱 Improve mobile responsiveness
- 🌙 Add dark/light theme toggle
- ⚡ Optimize performance (lazy loading media)

## 📸 Preview

![Preview Image 1](../EVolution%20Landing%20Page/src/assets/preview1.png)

---
