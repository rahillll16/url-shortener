# 🔗 URL-Shortener

A full-stack URL shortener built with **Node.js**, **Express**, **MongoDB**, and **EJS**, with user authentication using **JWT** and secure cookies.

---

## 📁 Project Structure

```
url-shortener/
├── controllers/         --> Handles signup, login, and URL logic
├── middleware/          --> Authentication middleware (JWT, roles)
├── models/              --> MongoDB schemas (User, URL)
├── node_modules/        --> Node.js dependencies
├── routes/              --> Express route handlers
├── services/            --> JWT auth logic (sign & verify tokens)
├── views/               --> EJS templates for rendering frontend
├── connection.js        --> MongoDB connection setup
├── index.js             --> Main server entry point
├── package.json         --> Project metadata and dependencies
├── package-lock.json    --> Exact versions of installed dependencies
```

---

## 🚀 Features

- 🔗 Shorten long URLs
- 👥 User signup and login
- 🔐 JWT-based authentication
- 📄 Clicks tracking and analytics
- 👥 User dashboard to view shortened URL history
- 🍪 Secure `HttpOnly` cookies
- 🛡️ Role-based access control
- 📄 Clean frontend using EJS
- ✅ Organized MVC architecture

---

## 🛠️ Tech Stack

| Layer        | Technology        |
|--------------|-------------------|
| Backend      | Node.js, Express  |
| Database     | MongoDB, Mongoose |
| Frontend     | EJS, HTML, CSS    |
| Auth         | JWT, cookie-parser |

---

## ⚙️ Setup Instructions

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/rahillll16/url-shortener.git
cd url-shortener
```

---

### 2. 📦 Install Dependencies

```bash
npm install
```

---

### 3. 🛠️ Configure Environment (Optional)

Create a `.env` file in the root directory:

```ini
PORT=8001
MONGO_URI=mongodb://localhost:27017/url-shortener
JWT_SECRET="Rahil$$$123"
```

> 💡 Alternatively, you can directly update `connection.js` and `services/auth.js` with your Mongo URI and JWT secret.

---

### 4. 🚀 Start the Server

```bash
node index.js
```

Visit: [http://localhost:8001](http://localhost:8001)

---

## 🔐 Authentication Flow

- JWT is signed on login using `_id` and `email`.
- Token is sent to the client via cookie `token` (with `httpOnly`).
- `checkForAuthentication` middleware validates the token and sets `req.user`.
- `restrictTo(roles)` restricts access based on user roles like `admin`, `user`.

---

## 📁 Folder Highlights

| Folder        | Purpose                                      |
|---------------|----------------------------------------------|
| `controllers/` | Business logic (login, signup, URL actions) |
| `middleware/`  | Auth middleware (JWT check, restrict access)|
| `models/`      | Mongoose schemas (`User`, `URL`)            |
| `routes/`      | Express routers (auth, shortener)           |
| `services/`    | JWT sign/verify utility functions           |
| `views/`       | EJS templates for rendering frontend pages  |

---

## 🔧 To-Do / Future Enhancements

- [ ] Password hashing with `bcrypt`
- [ ] URL expiration support
- [ ] Admin panel for managing users and URLs
- [ ] QR Code generation for shortened links


## 📄 License

This project is licensed under the **MIT License**.