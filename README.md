# 🛒 Vibe Commerce - Mock E-Com Cart

A simple full-stack shopping cart application built as part of the **Vibe Commerce Internship Assignment**.  
This project demonstrates basic e-commerce features such as product listing, adding/removing items from the cart, calculating totals, and mock checkout.

---

## ⚙️ Tech Stack

- **Frontend:** React.js, React Router, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (or mock JSON data)
- **Version Control:** Git & GitHub

---

## 🚀 Setup Instructions

### 1️⃣ Clone this Repository
```bash
git clone https://github.com/<your-username>/vibe-commerce-cart.git
cd vibe-commerce-cart

---

##Setup & Run Backend
cd backend
npm install
npm start

---


##3️⃣ Setup & Run Frontend

cd ../frontend
npm install
npm start

---


###➡️ App runs on: http://localhost:3000

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/api/products` | Get all products      |
| POST   | `/api/cart`     | Add item to cart      |
| DELETE | `/api/cart/:id` | Remove item           |
| GET    | `/api/cart`     | Fetch cart with total |
| POST   | `/api/checkout` | Generate mock receipt |


---


###✨ Features

✅ Product listing with Add to Cart
✅ Cart view with quantity & total calculation
✅ Remove items from cart
✅ Checkout with mock receipt (name, email, timestamp)
✅ Responsive UI
