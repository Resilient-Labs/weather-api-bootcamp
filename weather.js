// Class responsible for fetching weather data from the API
// This class is separate from UI logic to follow the Single Responsibility Principle (SRP),
// making the code easier to maintain and test.
class WeatherService {
    constructor(apiKey) {
        this.apiKey = apiKey; // Store the API key
    }

    // Fetch weather data for a given city and country
    // Keeping this separate allows us to easily swap or update API handling without affecting the UI.
    fetchWeather(city, country) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.apiKey}&units=imperial`;

        return fetch(url)
            .then(response => response.json()) // Convert response to JSON
            .then(data => {
                if (data.cod !== 200) {
                    throw new Error(data.message); // Handle API errors
                }
                return data.main.temp; // Return the temperature in Fahrenheit
            });
    }
}

// Class responsible for handling user interactions and updating the UI
// This separation ensures that the UI logic is not mixed with the data-fetching logic,
// makes it easier to manage and modify either part independently.
class WeatherUI {
    constructor() {
        // Get references to UI elements
        this.cityInput = document.getElementById('city');
        this.countryInput = document.getElementById('country');
        this.resultDiv = document.getElementById('result');
        this.button = document.getElementById('getWeatherBtn');
        this.loader = document.getElementById('loader'); // Loader element for indicating API calls
    }

    // Display the retrieved temperature in the UI
    // Keeping UI updates in a separate method makes it easy to modify later (e.g., adding more info like humidity)
    displayWeather(city, country, temperature) {
        this.hideLoader(); // Hide the loading indicator
        this.resultDiv.textContent = `The temperature in ${city}, ${country} is ${temperature}°F`;
    }

    // Display an error message in case of a failure
    displayError(message) {
        this.hideLoader(); // Hide the loading indicator
        this.resultDiv.textContent = `Error: ${message}`;
    }

    // Get user input values from the input fields
    // Separating this logic allows for easy validation or transformation of input if needed in the future
    getUserInput() {
        return {
            city: this.cityInput.value,
            country: this.countryInput.value
        };
    }

    // Show the loading indicator while fetching data
    // Improves user experience by letting them know that data is being retrieved
    showLoader() {
        this.loader.style.display = 'block';
    }

    // Hide the loading indicator once data is fetched
    hideLoader() {
        this.loader.style.display = 'none';
    }
}

// Main application class that connects the UI with the weather service
// Acts as a controller to orchestrate the flow between user actions, API calls, and UI updates
class WeatherApp {
    constructor(apiKey) {
        this.weatherService = new WeatherService(apiKey); // Create an instance of WeatherService
        this.weatherUI = new WeatherUI(); // Create an instance of WeatherUI
        
        // Add event listener to the button for fetching weather data
        // Using an arrow function preserves 'this' context
        this.weatherUI.button.addEventListener('click', () => this.getWeather());
    }

    // Function to fetch and display weather data
    // Separating this function ensures that API logic and UI updates remain modular and easy to modify
    getWeather() {
        const { city, country } = this.weatherUI.getUserInput(); // Get user input
        this.weatherUI.showLoader(); // Show loading indicator to indicate API request in progress

        this.weatherService.fetchWeather(city, country)
            .then(temp => this.weatherUI.displayWeather(city, country, temp)) // Display temperature on success
            .catch(error => this.weatherUI.displayError(error.message)); // Display error message on failure
    }
}

// Initialize the application with the OpenWeatherMap API key
// Keeping initialization separate allows for flexibility in managing multiple instances if needed
const app = new WeatherApp('a892507f23bd0efd3ecf30b2c30cd588');