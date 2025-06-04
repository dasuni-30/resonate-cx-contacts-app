# 📇 Resonate CX Contacts App

A responsive and visually appealing React application that displays a list of contacts using data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

This app allows users to browse and search through contacts with a modern UI, using React, Tailwind CSS, and Framer Motion.

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14 or later)
- npm or yarn

---

### 🔧 Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/dasuni-30/resonate-cx-contacts-app.git
cd resonate-cx-contacts-app
```

2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

3. **Install Tailwind CSS and Related Tools**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. **Install Framer Motion**

```bash
npm install framer-motion
```

5. **Configure Tailwind**


In tailwind.config.js, add:

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6. **Configure PostCSS (Optional)**

Make sure postcss.config.js contains:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

7. **Add Tailwind Directives**

In your src/index.css or src/App.css, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

8. **Start the Development Server**

```bash
npm start
# or
yarn start
```

The app will run at: http://localhost:3000

📁 **Project Structure**
```csharp
resonate-cx-contacts-app/
├── public/
├── src/
│   ├── api/                 # (optional) API abstraction
│   ├── App.js               # Main component
│   ├── App.css              # Custom styles
│   ├── index.css            # Tailwind base styles
│   └── index.js             # Entry point
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
└── package.json
```
