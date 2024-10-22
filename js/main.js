const apiKey = "37a6cfb01e54f7ec5dcf78f1d241db81"; // Store API key for OpenWeatherMap
const apiUrl = "https://api.openweathermap.org/data/2.5/weather"; // Base URL for current weather
const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast"; // Base URL for 5-day forecast
const geoApiUrl = "https://api.openweathermap.org/geo/1.0/direct"; // Base URL for geolocation lookup

// Main function to handle button click and fetch weather & forecast data
function getWeather() {
    const location = document.getElementById("locationInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (!location) {
        errorMessage.textContent = "Please enter a location.";
        return;
    }

    errorMessage.textContent = "";

    // Fetch weather data and display it
    fetchWeatherData(location)
        .then(data => displayWeather(data))
        .catch(() => (errorMessage.textContent = "Error fetching weather data."));

    // Fetch forecast data and display it
    fetchWeatherForecast(location)
        .then(forecast => displayForecast(forecast))
        .catch(() => (errorMessage.textContent = "Error fetching forecast data."));
}

// Function to update the HTML with current weather data
function displayWeather(data) {
    const weatherDisplay = document.getElementById("weatherDisplay");

    // Update the elements with weather data
    document.getElementById("weatherLocation").textContent = `Location: ${data.name}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.temperature}°F`;
    document.getElementById("condition").textContent = `Condition: ${data.description}`;

    weatherDisplay.style.display = "block"; // Make the weather section visible
}

// Function to update the HTML with the 5-day forecast data
function displayForecast(forecast) {
    const forecastDisplay = document.getElementById("forecastDisplay");
    const forecastContainer = document.getElementById("forecastContainer");

    forecastContainer.innerHTML = "";

    // Loop through forecast data and create HTML elements for each day
    Object.entries(forecast).forEach(([date, entries]) => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("forecast-day");

        const dayTemp = entries[0].main.temp;
        const description = entries[0].weather[0].description;

        // Add HTML content with date, temperature, and condition
        dayElement.innerHTML = `
            <strong>${date}</strong>
            <p>Temperature: ${dayTemp}°F</p>
            <p>Condition: ${description}</p>
        `;

        forecastContainer.appendChild(dayElement); // Add the day element to the forecast container
    });

    forecastDisplay.style.display = "block";
}

// Function to fetch current weather data for a given location
function fetchWeatherData(location) {
    const geoUrl = `${geoApiUrl}?q=${location}&limit=1&appid=${apiKey}`;

    // Fetch geolocation data (latitude & longitude)
    return fetch(geoUrl)
        .then(response => response.json())
        .then(geoData => {
            if (geoData.length === 0) {
                throw new Error("Location not found");
            }

            const { lat, lon } = geoData[0];
            const weatherUrl = `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

            return fetch(weatherUrl);
        })
        .then(response => response.json()) // Convert response to JSON
        .then(weatherData => ({
            name: weatherData.name, // Extract city name
            temperature: weatherData.main.temp, // Extract temperature
            description: weatherData.weather[0].description, // Extract weather condition
        }));
}

// Function to fetch the 5-day weather forecast for a given location
function fetchWeatherForecast(location) {
    const geoUrl = `${geoApiUrl}?q=${location}&limit=1&appid=${apiKey}`;

    // Fetch geolocation data
    return fetch(geoUrl)
        .then(response => response.json())
        .then(geoData => {
            if (geoData.length === 0) {
                throw new Error("Location not found");
            }

            const { lat, lon } = geoData[0];
            const forecastUrl = `${forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

            return fetch(forecastUrl);
        })
        .then(response => response.json())
        .then(forecastData => {
            const dailyForecast = {};

            forecastData.list.forEach(entry => {
                const date = new Date(entry.dt * 1000).toLocaleDateString();
                if (!dailyForecast[date]) {
                    dailyForecast[date] = [];
                }
                dailyForecast[date].push(entry);
            });

            // Limit to the first 5 days of forecast
            return Object.fromEntries(Object.entries(dailyForecast).slice(0, 5));
        });
}
