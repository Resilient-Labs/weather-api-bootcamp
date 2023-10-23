document
	.getElementById("fetchWeatherBtn")
	.addEventListener("click", fetchWeather);

function fetchWeather() {
	const cityName = document.getElementById("cityInput").value.trim();
	const stateName = document.getElementById("stateInput").value.trim();
	const countryName = document.getElementById("countryInput").value.trim();

	const API_KEY = "2afd2a5c8bd14c77dbd08d06be0e3928";
	const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

	const url = `${BASE_URL}?q=${cityName},${stateName},${countryName}&appid=2afd2a5c8bd14c77dbd08d06be0e3928&units=metric`; // units=metric gives temperature in Celsius

	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			const tempC = data.main.temp;
			const tempF = (tempC * 9) / 5 + 32; // Convert Celsius to Fahrenheit
			const description = data.weather[0].description;
			const humidity = data.main.humidity;
			const windSpeed = data.wind.speed;

			document.getElementById(
				"cityName"
			).textContent = `Weather for ${cityName}, ${countryName}`;
			document.getElementById(
				"temperature"
			).textContent = `Temperature: ${tempC.toFixed(2)}°C / ${tempF.toFixed(
				2
			)}°F`;
			document.getElementById(
				"description"
			).textContent = `Description: ${description}`;
			document.getElementById(
				"humidity"
			).textContent = `Humidity: ${humidity}%`;
			document.getElementById(
				"windSpeed"
			).textContent = `Wind Speed: ${windSpeed} km/h`;
		})
		.catch((error) => {
			console.error("Error fetching weather data:", error);
		});
}
