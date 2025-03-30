// openweather api key
const apiKey = "bfb0683dcf33977e096559c91c4b9990"; 

const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();

    if (city === "" || country === "") {
        alert("Please enter both city AND country.");
        return;
    }

    getWeather(city, country);
});

function getWeather(city, country) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`;

    // fetch weather data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const { name, sys, main, weather, wind } = data;

            document.getElementById("weather-info").innerHTML = `
                <div class="weather-card">
                    <h2>${name}, ${sys.country}</h2>
                    <p><strong>Temperature:</strong> ${main.temp}°F</p>
                    <p><strong>Weather:</strong> ${weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
                </div>`;
        })
        .catch(error => {
            document.getElementById("weather-info").innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
}
