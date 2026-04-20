# 🌍 World Travel Tracker

A simple web app that lets users **track the countries they have visited** on an interactive world map.

Built using **Node.js, Express, PostgreSQL, and EJS**, the app allows users to enter a country name and automatically color that country on the map. The total number of visited countries is also displayed.

---

## ✨ Features

🗺 Interactive world map

🌎 Add countries you have visited

🎨 Visited countries are highlighted on the map

📊 Total visited country count

⚡ Fast Express backend

🗄 Data stored in PostgreSQL

---

## 📸 Screenshots

<img width="1919" height="1071" alt="image" src="https://github.com/user-attachments/assets/4512c4ef-f239-46d8-a395-f4754d600bc5" />

---

## 🛠 Tech Stack

**Backend**

* Node.js
* Express.js

**Frontend**

* EJS
* HTML
* CSS
* JavaScript

**Database**

* PostgreSQL

---

## 📁 Project Structure

```
world-travel-tracker
│
├── public
│
├── views
│   └── index.ejs
│
├── index.js
├── package.json
└── package-lock.json
```

---

## 🗄 Database Setup

Create database

```
CREATE DATABASE world;
```

Create table

```
CREATE TABLE visited_countries (
  id SERIAL PRIMARY KEY,
  country_code CHAR(2) UNIQUE
);
```

Your project also requires a **countries table** containing country names and ISO country codes.

---

## ⚙ Database Configuration

Before running the project, update the database credentials inside **index.js**.

Replace the placeholders with your PostgreSQL details:

```javascript
const db = new pg.Client({
  user: "username",
  host: "localhost",
  database: "database_name",
  password: "password",
  port: port_number
});
```

Example configuration:

```javascript
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "your_password",
  port: 5432
});
```

---

## 💻 Installation

Clone the repository

```
git clone https://github.com/yourusername/world-travel-tracker.git
```

Go to the project folder

```
cd world-travel-tracker
```

Install dependencies

```
npm install
```

---

## ▶ Run the Application

```
node index.js
```

Open in your browser

```
http://localhost:3000
```

---

## 🎮 How It Works

1️⃣ User enters a country name.
2️⃣ The server searches for the country in the database.
3️⃣ The corresponding country code is saved in PostgreSQL.
4️⃣ The country is colored on the world map.
5️⃣ The total visited countries count updates.

---

## 🚀 Future Improvements

🌎 Show country information on click
📊 Track visited continents
🧭 Add travel history timeline
🏆 Add user accounts
📍 Save travel notes

---

✨ *A fun way to visualize your travel journey across the world!* 🌍
