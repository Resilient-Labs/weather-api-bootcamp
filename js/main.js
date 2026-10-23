
document.getElementById('searchBtn').addEventListener('click', searchWeather)

function searchWeather() {

    const API_KEY = '2625a992af5449e1a3025843262309'
    const city = document.querySelector('#cityInput').value
    const country = document.querySelector('#country-name').value
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}, ${country}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('#cityName').innerText = "City: " + data.location.name + ", " + data.location.region
            document.querySelector('#temperature').innerText = "Temperature: " + data.current.temp_f + " °F"
            document.querySelector('#condition').innerText = "Current conditions: " + data.current.condition.text
            document.querySelector('#image').src = 'https:' + data.current.condition.icon
            document.querySelector('#humidity').innerText = 'Humidity: ' + data.current.humidity + "%"
            document.querySelector('#country').innerText = data.location.country
        })
        .catch(error => {
            alert('Please enter a city.', error)
        })
}