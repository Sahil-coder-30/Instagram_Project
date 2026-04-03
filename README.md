# 📸 InstaClone

> A feature-rich Instagram clone built with **React** — currently a work in progress.

![Work In Progress](https://img.shields.io/badge/Status-Work%20In%20Progress-yellow?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🚀 Features

- 🔐 **Authentication** — Secure sign up, log in, and log out
- 🖼️ **Photo Upload** — Share photos with captions
- 📖 **Stories** — View and post 24-hour disappearing stories
- 🎬 **Reels** — Short-form video feed
- ❤️ **Like & Comment** — Interact with posts in real time
- 👥 **Follow / Unfollow** — Build your network
- 💬 **DMs / Chat** — Direct messaging between users
- 🔍 **Explore / Search** — Discover users and content
- 🔔 **Notifications** — Stay updated on activity

---

## 🛠️ Tech Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React      |
| Styling    | CSS / (add yours here) |
| State Mgmt | (e.g. Redux / Context API) |
| Backend    | (e.g. Firebase / Node.js) |
| Database   | (e.g. Firestore / MongoDB) |

> **Note:** Update the table above as you finalize your stack.

---

## 📁 Project Structure

```
insta-clone/
├── public/
├── src/
│   ├── assets/          # Images, icons
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-level pages
│   ├── context/         # Global state / Context API
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API / Firebase calls
│   ├── utils/           # Helper functions
│   └── App.jsx
├── .env.example
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/insta-clone.git
cd insta-clone

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your credentials in .env

# 4. Start the development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory. Example:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

---

## 🗺️ Roadmap

- [x] Project setup & routing
- [x] Authentication (Login / Signup)
- [x] Photo Upload
- [x] Like & Comment
- [x] Follow / Unfollow
- [ ] Stories
- [ ] Reels
- [ ] DMs / Chat
- [ ] Explore / Search
- [ ] Notifications
- [ ] Responsive / Mobile UI
- [ ] Deployment

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)

---

> ⭐ Star this repo if you find it helpful!