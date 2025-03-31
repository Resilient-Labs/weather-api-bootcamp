
document.querySelector('.left').addEventListener('click', async () => fetchFor(prompt("Which City?")))


async function fetchFor(city="Boston") {
    try {
        const res = await fetch(`https://wttr.in/${city.replace(' ', '%20')}?format=j1`);
        const weatherData = await res.json();

        // I want to validate explicitly, just in case the weather data is not available
        if (weatherData.current_condition && weatherData.current_condition.length > 0) {
            updateDOM(weatherData)
        } else {
            console.warn('Invalid weather data:', weatherData);
            appendElement(facility, 'N/A', 'Weather data unavailable');
        }
    } catch (weatherErr) {
        console.error('Weather fetch error:', weatherErr);
        appendElement(facility, 'N/A', 'Error retrieving weather');
    }
}

function updateDOM(data) {
    document.querySelector('.city').textContent = data.nearest_area[0].areaName[0].value
    document.querySelector('.feelsLikeNumber').textContent = `${data.current_condition[0].FeelsLikeF}°F`
    document.querySelector('.windNumber').textContent = `${data.current_condition[0].windspeedMiles} MPH`
    document.querySelector('.uvNumber').textContent = `${data.current_condition[0].uvIndex} UVI`
    document.querySelector('.tempNumber').textContent = data.current_condition[0].temp_F
    document.querySelector('.tempText').textContent = data.current_condition[0].weatherDesc[0].value
}

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();

  document.querySelector('.time').textContent = `${d.getHours()}:${d.getMinutes()}`
  document.querySelector('.day').textContent = d.toDateString()
}

time()
setInterval(time, 60000);

fetchFor()