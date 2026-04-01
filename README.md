<img width="1620" height="1478" alt="image" src="https://github.com/user-attachments/assets/56895525-cf7f-45f7-b962-f333a95d2ef5" />


# 📚 Vine Bookstore

A full-stack bookstore web application built with React and Supabase.

🔗 Live Demo: https://peterrizek009.github.io/vinebookstore

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React (CRA) | Frontend framework |
| Tailwind CSS | Styling |
| React Router | Navigation |
| Supabase | Backend, Database, Auth |
| PostgreSQL | Database |
| Google OAuth | Authentication |
| GitHub Pages | Deployment |

---

## 📁 Project Structure
```
src/
├── Pages/
│   ├── Home.jsx
│   ├── Books.jsx
│   ├── BookDetails.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Payment.jsx
│   ├── Dashboard.jsx
│   └── Auth.jsx
├── component/
│   ├── navbar/
│   ├── footer/
│   ├── modals/
│   └── wishlist/
├── context/
│   └── StoreContext.jsx
└── Supabase.js
```

---

## 🗄️ Database Schema

### books
| Column | Type |
|---|---|
| id | int8 (PK) |
| title | text |
| image | text |
| categorry | text |
| price | int2 |

### user_books
| Column | Type |
|---|---|
| id | serial (PK) |
| user_id | uuid (FK → auth.users) |
| book_id | int8 (FK → books) |
| type | text (cart / wishlist) |

### profiles
| Column | Type |
|---|---|
| id | uuid (FK → auth.users) |
| role | text (user / admin) |

---

## ✨ Features

- 📖 Browse books with category filter and price sort
- 🛒 Add to cart — saved per user in Supabase
- ❤️ Wishlist — saved per user in Supabase
- 🔐 Google OAuth login via Supabase Auth
- 👤 Role-based access (user / admin)
- 🛠️ Admin Dashboard — add, edit, delete books + manage users
- 💳 Payment page with order summary
- 📱 Responsive design

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/PeterRizek009/vinebookstore.git
cd vinebookstore
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_KEY=your_supabase_anon_key
```

### 4. Run locally
```bash
npm start
```

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `REACT_APP_SUPABASE_URL` | Your Supabase project URL |
| `REACT_APP_SUPABASE_KEY` | Your Supabase anon/publishable key |

---

## 👤 Admin Access

To make a user admin, run in Supabase SQL Editor:
```sql
UPDATE profiles SET role = 'admin' WHERE id = 'user_id_here';
```

Or use the Users tab inside the Dashboard page.

---

## 📄 License

MIT © Peter Rizek
