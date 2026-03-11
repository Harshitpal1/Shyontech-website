# Shyontech Software Technology India Pvt. Ltd.

> **Where Quality Rules**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.0-47A248?style=flat&logo=mongodb)](https://mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, professional full-stack website for **Shyontech Software Technology India Pvt. Ltd.** — an IT services, software development, and training company based in Gwalior, Madhya Pradesh, India.

---

## ✨ Features

- 🎨 **Modern SaaS Design** — Inspired by Stripe, Vercel, Linear
- 🌙 **Dark Mode** by default with toggle
- 📱 **Fully Responsive** — Mobile-first approach
- ⚡ **Animated UI** — Framer Motion page transitions and scroll animations
- 🔍 **SEO-Friendly** — Semantic HTML with meta tags
- 📝 **Blog System** — Search, filter, and pagination
- 💼 **Services** — Dynamic cards with category filters and modal detail view
- 📩 **Contact Form** — Validation with React Hook Form + Yup
- 🗃️ **MongoDB Backend** — REST API with Express

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite 5, Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Yup |
| HTTP | Axios |
| Routing | React Router v6 |
| Backend | Node.js, Express 4 |
| Database | MongoDB with Mongoose |
| Security | Helmet, CORS |
| Logging | Morgan |

---

## 📁 Folder Structure

```
shyontech-website/
├── client/                     # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── BlogCard.jsx
│   │   │   ├── TeamCard.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   ├── AnimatedButton.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── DarkModeToggle.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogDetail.jsx
│   │   │   └── Contact.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── data/               # Static fallback data
│   │   │   ├── services.json
│   │   │   └── blogPosts.json
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                     # Node.js backend
│   ├── models/
│   │   ├── Service.js
│   │   ├── BlogPost.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── services.js
│   │   ├── blog.js
│   │   └── contact.js
│   ├── controllers/
│   │   ├── servicesController.js
│   │   ├── blogController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── seed/
│   │   └── seedData.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ and npm
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone the Repository

```bash
git clone https://github.com/Harshitpal1/Shyontech-website.git
cd Shyontech-website
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
MONGO_URI=mongodb://localhost:27017/shyontech
PORT=5000
CLIENT_URL=http://localhost:5173
```

### 3. Set Up the Frontend

```bash
cd ../client
npm install
```

Create a `.env` file:

```bash
echo "VITE_API_URL=/api" > .env
```

---

## 🌱 Seed the Database

Before running the server, seed the database with initial services and blog posts:

```bash
cd server
npm run seed
```

This will populate:
- **10 services** (Web Development, Full Stack, Android, Digital Marketing, Training programs, IT Services)
- **6 blog posts** with full content

---

## ▶️ Running the Application

### Development Mode

**Terminal 1 — Start the backend:**

```bash
cd server
npm run dev
```

Server will run at `http://localhost:5000`

**Terminal 2 — Start the frontend:**

```bash
cd client
npm run dev
```

Frontend will run at `http://localhost:5173`

### Production Build

```bash
cd client
npm run build
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/services` | Get all services (filter by `?category=`) |
| GET | `/api/services/:id` | Get single service |
| GET | `/api/blog` | Get all posts (paginate: `?page=1&limit=6`) |
| GET | `/api/blog/:id` | Get single blog post |
| POST | `/api/contact` | Submit contact form |

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Services, Stats, Testimonials, CTA |
| `/about` | About — Mission, Vision, Timeline, Team, Values |
| `/services` | Services — Filter by category, modal detail |
| `/blog` | Blog — Search, filter, pagination |
| `/blog/:id` | Blog Detail — Full post, author, related posts |
| `/contact` | Contact — Form, Google Maps, office hours |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#6C63FF` (purple-indigo) |
| Secondary | `#00D4FF` (cyan) |
| Accent | `#FF6B6B` (coral red) |
| Dark BG | `#0A0A0F` |
| Card BG | `#13131A` |
| Text | `#FFFFFF` / `#A0A0B0` |

---

## 📸 Screenshots

> *Screenshots coming soon*

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## �� Company Info

**Shyontech Software Technology India Pvt. Ltd.**  
H 50, Govind Puri, Gwalior, Madhya Pradesh 474001, India  
�� info@shyontech.in | 🌐 http://www.pdpandey.com  
*Founded 2018 | "Where Quality Rules"*
