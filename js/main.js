    let temp = document.querySelector('#today-temp')
    let unit = 'imperial'
    let apiKey= '4ec69e9f7ad3c9c17184f4c03f695425'
    let scale = unit === 'imperial' ? "°F" : "°C"
    let perHour= unit === 'imperial' ? "mph" : "km/h"

document.querySelector('#get-temp').addEventListener('click', getTemp)

function getTemp(){
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=${unit}`)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 

        document.querySelector('#location').textContent = `${data.name}, ${data.sys.country}`//city name
        document.querySelector('h1').innerText = `${Math.round(data.main.temp)} ${scale}` //Current Temp
        document.querySelector('#wind').innerText = `${Math.round(data.wind.speed)} ${perHour}` //Wind speed
        document.querySelector('#humidity').innerText = `${data.main.humidity} %` //Humidity
        document.querySelector('h3').innerText = `${data.weather[0].description}` //Forecast description
        document.querySelector('#feels-like').innerText = `${Math.round(data.main['feels_like'])} °F` //Temperature Feels like


    function getDate() {
        let date = new Date()
        let dateString = date.toDateString()
        let dateArray = dateString.split(' ')
        document.querySelector('h2').innerText = `${dateArray[0]}` // Day of the week
        document.querySelector('.date-day').innerText = `${dateArray.slice(1).join(' ')}` // DD Month YYYY
    }

    getDate()

    })

    .catch(err => { 
        console.log(`error ${err}`) 
    })
}