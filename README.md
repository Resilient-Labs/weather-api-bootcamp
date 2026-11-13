# 🌦 Simple Weather App

A weather app where you type in a city and state and get back the current temperature in Fahrenheit, pulled live from the WeatherAPI. Built with plain HTML, CSS, and vanilla JavaScript.

### Project Description

This project is a simple weather application. It gives the user a single input for a city and state, a button to check the weather, and a result area that shows the current temperature and the country for that location. The city is passed straight into the API call as a query parameter. Any place the API recognizes will work. This project was forked from [Resilient-Labs/weather-api-bootcamp](https://github.com/Resilient-Labs/weather-api-bootcamp).

### Live Link: 
- To access site, [click here](https://priscilla-ruilova.github.io/Simple-Weather-App/) or use the link in the About section of this repo.

![screenshot of the weather app](assets/Simple%20Weather%20App.png)

### Features:

- **City search** — type a city and state into the input (placeholder: `city, state`) and click **Let's check!**
- **Current temperature** — displays the temperature in Fahrenheit as `Temp: 68°F`.
- **Location info** — displays the country for the searched location as `Country: United States`.
- **Live API data** — every search makes a fresh request to WeatherAPI's `current.json` endpoint, so the result is the weather right now.
- **Static Site** — one `index.html`, no build step, no dependencies to install.
- **Custom styling** — a Google Fonts stack and a hand-written stylesheet in `assets/main.css`.

### Tech Used:

- **Frontend:** HTML, CSS, JavaScript (vanilla, no framework)
- **API:** [WeatherAPI](https://www.weatherapi.com/) — `current.json` endpoint
- **Browser APIs:** `fetch`, `document.querySelector`, `addEventListener`
- **Hosting:** GitHub Pages

### Things I Learned:

- Working with an API:
  - Building a request URL with template literals so the user's input and the API key get dropped into the query string.
  - Chaining `fetch(url)` → `.then(res => res.json())` → `.then(data => ...)` and reading values out of the response, like `data.current.temp_f` and `data.location.country`.
- DOM manipulation:
  - Grabbing elements with `document.querySelector` and writing results into the page with `innerText`.
  - How to attach a click listener to the button with `addEventListener` so the search runs on demand rather than on page load.
- Debugging:
  - Using `console.log(data)` to inspect the full API response before writing code against it.
- Deployment:
  - How to host a static site on GitHub Pages.

### How to Use:

1. Clone this repository or the one I forked above: 
    ```bash
    git clone https://github.com/priscilla-ruilova/Simple-Weather-App.git.
    ```

2. Navigate to the project 
    ```bash
    cd simple-weather-app
    ```

3. Open `index.html` in your browser — no install step needed.

4. Type a US city and state into the input, for example `Philadelphia, PA`, and click **Let's check!**.

5. Make it your own!
    - Swap in your own API key from [weatherapi.com](https://www.weatherapi.com/) in `assets/main.js`.
    - Consider adding more or different data from the response, like humidity, wind, or a weather icon.
    - Try changing the styling in `assets/main.css` to make it your own!

Happy Coding! 