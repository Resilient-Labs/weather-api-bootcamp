# 🌦 Weather App

## 🎯 Goal
Build a **simple weather application** that allows users to enter a **city** and **country**, then returns the **current temperature in Fahrenheit** using data from a weather API.

---

## 🚀 Features
- ✅ User inputs a **city** and **country**
- ✅ Displays **current temperature** in Fahrenheit
- ✅ Fetches live data from a weather API (e.g. [OpenWeatherMap API](https://openweathermap.org/api))
- ✅ Simple, responsive interface

---

## 🧩 Tech Stack
- **HTML** – structure and input fields  
- **CSS** – layout and styling  
- **JavaScript (ES6)** – fetches and displays weather data dynamically  
- **API** – [OpenWeatherMap API](https://openweathermap.org/api)

---

## 💻 How It Works
1. The user enters a **city** and **country code** (e.g., `Boston, US`).
2. When the user clicks the **Search** button:
   - JavaScript makes a `fetch()` request to the **OpenWeatherMap API**.
   - The API returns weather data in JSON format.
3. The app extracts and displays:
   - The **current temperature in Fahrenheit**
   - (Optional) city name, country, and weather condition

---

## ⚙️ Example API Call
```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=YOUR_API_KEY`)
