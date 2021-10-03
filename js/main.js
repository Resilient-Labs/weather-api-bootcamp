// Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', getFahrenheit)

function getFahrenheit() {
    const city = document.querySelector('#city').value
    const state = document.querySelector('#state').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${key}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.main.temp)
            document.querySelector('#temp').innerText = `Current Temperature: ${data.main.temp} \u00B0F`
        })
        .catch(err => {
            console.log('error')
        })
}