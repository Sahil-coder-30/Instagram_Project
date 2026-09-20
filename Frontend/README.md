# 📸 INSTACLONE — Frontend Client

The frontend client for the **INSTACLONE** social media platform, built with **React 19**, **Vite**, **React Router v7**, and a custom **Sass (SCSS)** design system.

> 📖 **For complete full-stack architecture, system diagrams, API specifications, and local setup instructions, please refer to the [Root README.md](../README.md).**

---

## ⚡ Core Technologies

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: Modular [Sass (SCSS)](https://sass-lang.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **State Management**: React Context API
- **Design System & Architectural Specs**:
  - Refer to [FRONTEND_ARCHITECTURE.md](./FRONTEND_ARCHITECTURE.md) for domain-driven folder structure guidelines.
  - Refer to [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for UI tokens, layout rules, and component patterns.

---

## 🚀 Quickstart (Frontend Only)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure `VITE_SERVER` points to your backend instance:
```env
VITE_SERVER=http://localhost:3000
```

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.
