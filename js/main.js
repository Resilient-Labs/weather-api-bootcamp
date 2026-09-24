// User types a city + 2-letter country code and gets back the current temp in Fahrenheit.
// HTTP Request
// GET https://api.openweathermap.org/data/2.5/weather?q={city},{country}&units=imperial&appid={API_KEY}
//
// units=imperial is what makes OpenWeatherMap hand back Fahrenheit directly, instead of us
// doing the C-to-F math ourselves.

const cityInput = document.getElementById('city-input');
const countryInput = document.getElementById('country-input');
const btn = document.getElementById('weather-btn');
const errorEl = document.getElementById('error-message');
const locationEl = document.getElementById('result-location');
const tempEl = document.getElementById('result-temp');
const descriptionEl = document.getElementById('result-description');

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

btn.addEventListener('click', getWeather);

function getWeather() {
	clearError();
	clearResult();

	const city = cityInput.value.trim();
	const country = countryInput.value.trim();

	// catch this before it ever hits the network - a blank field means a broken query
	// string on OpenWeatherMap's end, so there's no point making the request
	if (!city || !country) {
		showError('Please enter both a city and a country code.');
		return;
	}

	// config.js ships with a placeholder - if someone forgot to drop in their real key,
	// fail loudly here instead of letting a confusing 401 be the first clue
	if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
		showError('No API key set. Copy js/config.example.js to js/config.js and add your OpenWeatherMap key.');
		console.error('API_KEY is missing or still the placeholder value - see js/config.example.js');
		return;
	}

	const url = `${API_URL}?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&units=imperial&appid=${API_KEY}`;
	console.log('requesting:', url.replace(API_KEY, 'HIDDEN'));

	fetch(url)
		.then(res => {
			console.log('response status:', res.status);
			return res.json().then(data => ({ status: res.status, ok: res.ok, data }));
		})
		.then(({ ok, status, data }) => {
			if (!ok) {
				// OpenWeatherMap puts a human-readable reason in data.message for both
				// a bad city/country (404) and a bad key (401)
				console.error(`OpenWeatherMap responded with status ${status}:`, data.message);
				showError(data.message || 'Could not find weather for that city and country.');
				return;
			}

			console.log('weather data:', data);
			showWeather(data);
		})
		.catch(err => {
			// this branch is for the request never making it back at all (offline, DNS, CORS, etc),
			// as opposed to the .then above which handles the API responding with an error
			console.error('request failed:', err);
			showError('Something went wrong reaching the weather service - check the console for details.');
		});
}

function showWeather(data) {
	locationEl.textContent = `${data.name}, ${data.sys.country}`;
	tempEl.textContent = `${Math.round(data.main.temp)}°F (feels like ${Math.round(data.main.feels_like)}°F)`;
	descriptionEl.textContent = data.weather[0].description;
}

function clearResult() {
	locationEl.textContent = '';
	tempEl.textContent = '';
	descriptionEl.textContent = '';
}

function showError(message) {
	errorEl.textContent = message;
}

function clearError() {
	errorEl.textContent = '';
}
