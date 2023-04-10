// worked with house Hayden

const getForecastBtn = document.querySelector('button')

function getWeather() {
    let cityName = document.querySelector('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bc9cc2d84d997888307f5cccea46ab32`

    fetch(url)
     .then(res => res.json())
     .then(data => {
        let kelvin = data.main.temp
        let fahrenheit = (kelvin - 273.15) * 9/5 + 32
        let cityInput = document.querySelector('.city') 
        cityInput = data.name
        let countryInput = document.querySelector('.state')
        countryInput = data.sys.country
        document.querySelector('h2').innerText = `The temperature in ${cityInput}, ${countryInput} is ${Math.round(fahrenheit)}°F.`
        
        console.log(data)
     })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

getForecastBtn.addEventListener('click', getWeather)