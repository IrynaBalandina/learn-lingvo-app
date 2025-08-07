# 📘 Project Description

This app is created for effective searching and selecting language teachers.  
You can filter by language, level or price.  
If you like several teachers, you can add them to "Favourites" and return to them later.  
On the teacher's page, you can see their rating, lesson format (online/offline), and experience (how many lessons were completed).  
You can also book a trial lesson from their page.

---

## 🛠 Main Technologies

- **Firebase** (Realtime Database)
- **React Router**
- **React Hook Form**
- **Vite**
- **CSS Modules**
- **LocalStorage**
- **Vercel** — for deployment

---

## 📄 Technical Specification (TЗ)

This is a link to the technical documentation:  
[Google Docs Spec](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit?tab=t.0)

---

## 🔐 Authentication

- Registration/Login forms with validation (all fields are required)
- Modal windows can be closed via (×, Esc, or backdrop)

---

## 🔥 Firebase Realtime Database

Collection: `teachers`  
Fields:
- `name`
- `avatar_url`
- `languages`
- `price_per_hour`
- `level`
- `rating`
- `reviews`
- `short description`

---

## ✨ Features

- Sorting teachers (by language, price, level)
- Pagination (4 teacher cards per page)
- Favorites (available only to authenticated users)
- Booking a trial lesson
- User state persists after page reload

---

## 🔗 Routes

- `/` — Home
- `/teachers` — TeachersPage
- `/teachers/:id` — TeacherDetailPage
- `/favorites` — Favorites (Private)

---

## 🚀 Deployment

- Deployed on Vercel  
- [Link to App](https://learn-lingvo-app.vercel.app) *(вкажи, якщо є)*

---

## 🎨 Design File

This is a link to the Figma:  
[Figma Design](https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=6-356&t=IN9tLxL8UEVUWciA-0)

---

## 🧪 Start Project Locally

```bash
git clone https://github.com/IrynaBalandina/learn-lingvo-app
cd learn-lingvo-app
npm install
npm run dev

👩‍💻 Author
IrynaBalandina on GitHub

