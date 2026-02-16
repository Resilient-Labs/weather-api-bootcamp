# Weather App

This project is a simple web application that lets users check the current temperature for any city, either inside the United States or anywhere else in the world.

I built it to practice working with APIs, handling user input, and designing responsive layouts using only **HTML**, **CSS**, and **JavaScript**.

---

## What It Does

Users can enter a city, state, and country for locations in the U.S., or just a city and country for places outside the U.S.

When they click the button, the app sends a live request to the **OpenWeatherMap API** and displays the current temperature in Fahrenheit. The interface is clean, minimal, and responsive.

---

## How It Works

1. The user enters the location information.
2. The app builds a request URL and calls the OpenWeatherMap API using `fetch()`.
3. The API returns a JSON response with temperature data.
4. The result is displayed on the page.

The app includes basic error handling to prevent crashes when an invalid city is entered.

---

## What I Learned

Working on this project helped me learn how to:

* Make API calls and handle JSON data using JavaScript
* Dynamically construct URLs with user input
* Write cleaner, modular functions
* Use CSS and media queries to build a responsive interface

This small project gave me hands-on experience connecting the frontend with an external API.

---

## Built With

* **HTML** – Page structure and form elements
* **CSS** – Layout, colors, and responsive design
* **JavaScript** – API logic and DOM manipulation
* **OpenWeatherMap API** – Source of real-time weather data

---

## How to Use

1. Clone or download this repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
2. Open `index.html` in your browser.
3. Enter a city and country (and state if in the U.S.).
4. Click **Get Weather** to display the current temperature.

**Note:** You will need your own free API key from [OpenWeatherMap](https://openweathermap.org/api). Replace the key in `main.js` with your own.

---

## Design Notes

* Fully responsive layout that adapts to all screen sizes
* Simple, intuitive input fields for U.S. and international searches
* Focused on readability and functionality rather than heavy styling

---

## Future Improvements

* Add weather icons and short descriptions
* Include Celsius/Fahrenheit toggle
* Display additional data such as humidity and wind speed
* Improve error feedback for invalid or empty inputs

---

## Author

**Abdirahman Mohamed**
Developer focused on building clean, practical projects that combine creativity, logic, and real-world application.
