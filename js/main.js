const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const countryInput = document.getElementById('countryInput');
const weatherResultDiv = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', function() {
    const city = cityInput.value.trim();
    const country = countryInput.value.trim();
    
    if (city === '' || country === '') {
        alert('Please enter both city and country.');
        return;
    }

    const apiKey = 'a6fa18d5bb84d5481b6bc228e4adc5f3'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            weatherResultDiv.textContent = `Temperature in ${city}, ${country}: ${temperature.toFixed(2)}°F`;
        })
        .catch(error => {
            console.error('Error:', error);
            weatherResultDiv.textContent = 'Error fetching weather data.';
        });
});
