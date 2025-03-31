
document.querySelector('button').addEventListener('click', getWeather);

function getWeather() {
    let searchTerm = document.querySelector('input').value.trim(); // Trim spaces
    if (!searchTerm) {
        alert("Please enter a city and state abbreviation.");
        return;
    }

    let url = `http://api.weatherstack.com/current?access_key=1e46ee990b27ab34ed6eacd270213f2c&query=${searchTerm}`;

    fetch(url) 
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log("Fetched Weather Data:", json);

        if (json.current) {
            let temperatureC = json.current.temperature;
            let temperatureF = (temperatureC * 9/5) + 32; // Convert to Fahrenheit

            // Update DOM with results
            document.querySelector('#weather').innerHTML = `Temperature: ${temperatureF.toFixed(1)}°F`;
        } else {
            console.error("Weather data not found in response.");
            document.querySelector('#weather').innerHTML = "Weather data unavailable.";
        }
    })
    .catch(err => {
        console.error(`Error fetching data: ${err}`);
        document.querySelector('#weather').innerHTML = "Error fetching weather data.";
    });
}
