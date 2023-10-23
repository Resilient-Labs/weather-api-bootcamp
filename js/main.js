// smurfs
document.querySelector('#getWeather').addEventListener('click', getWeather)

// grab the weather for the given city and country
function getWeather() {
    // variables
    const city = document.querySelector('#city')
    const country = document.querySelector('#country')
    const forecast = document.querySelector('#forecast')
    const key = '9ee140de1f9f43735062a4c0d89dfe0c' // api key

    forecast.innerHTML = ''

    // grab inputs for city name and country code
    let cityName = city.value
    let countryName = country.value

    // create url
    if (cityName && countryName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${key}`
    
        fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            let temp = Math.round((data.main.temp - 273.15) * (9 / 5) + 32)
            let feelsLike = Math.round((data.main.feels_like - 273.15) * (9 / 5) + 32)
            let description = data.weather[0].description
            let icon = data.weather[0].icon
            let iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`

            // add weather results icon and degrees farenheit to the dom
            // display forecast icon
            let forecastImg = forecast.appendChild(document.createElement('img'))
            forecastImg.classList.add('fade-in-image')
            forecastImg.src = iconURL

            // display forecast location
            let forecastLocation = forecast.appendChild(document.createElement('h2'))
            forecastLocation.classList.add('fade-in-image')
            forecastLocation.innerText = `${data.name}, ${data.sys.country}`

            // display forecast description
            let forecastTemp = forecast.appendChild(document.createElement('h3'))
            forecastTemp.classList.add('fade-in-image')
            forecastTemp.innerText = `Currently : ${temp}°F | Feels Like : ${feelsLike}°F`
            
            // display forecast description
            let forecastDescription = forecast.appendChild(document.createElement('h3'))
            forecastDescription.classList.add('fade-in-image')
            forecastDescription.innerText = description

        })
    
        .catch(err => {
            console.log(`error ${err}`)
        })
    }
}