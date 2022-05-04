document.querySelector('button').addEventListener('click', getWeather) //selecting the button element from the html and making it run the function getWeather (which will be created in the following lines) when clicked

function getWeather(){
    let location = document.querySelector('input').value
    console.log(location)
    let url = `https://api.weatherapi.com/v1/current.json?key=fcaf8e958e904ef1bf1191928220305&q=${location}&aqi=yes`
    console.log(url)
    fetch(url)
    .then (res => res.json())
    .then (data => {
        console.log(data)

        document.querySelector('h2').innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`

        document.querySelector('img').src = data.current.condition.icon

        document.querySelector('h3').innerText = data.current.temp_f + '°'

        document.querySelector('p').innerText = data.current.condition.text

        document.querySelector('.feel') .innerText = `Last updated: ${data.current.last_updated}` 

        document.querySelector('.precip').innerText = `Precipitation: ${data.current.precip_in}"`

        document.querySelector('.humid').innerText = `Humidity: ${data.current.humidity}%`

        document.querySelector('.wind').innerText = `Wind ${data.current.wind_dir} @ ${data.current.wind_mph}mph`

        document.querySelector('.updated').innerText = `Last Updated: ${data.current.last_updated}`
    })
}

