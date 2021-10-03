//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// const nasaPic = document.querySelector('img')
// const nasaVid = document.querySelector('iframe')

document.querySelector('button').addEventListener('click', fetchWeather)

function fetchWeather() {
  const city = document.querySelector('.city').value
  const state = document.querySelector('.state').value
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&units=imperial&appid=${apikey}`
  console.log(api)
  fetch(api)
    .then(response => response.json())
    
    .then(data => {
      console.log(data)
      console.log(data.main)
      console.log(data.weather)
      console.log(data.wind)
      document.querySelector('.city-name').innerText = 'CURRENT CITY: ' + data.name
      document.querySelector('.mainTemp').innerText = 'CURRENT TEMPERATURE: ' + data.main.temp
      document.querySelector('.feelsLike').innerText = 'FEELS LIKE: ' + data.main.feels_like
      document.querySelector('.humidity').innerText = 'HUMIDITY: ' + data.main.humidity
      document.querySelector('.windDeg').innerText = 'WIND DEGREES: ' + data.wind.deg
      document.querySelector('.windGust').innerText = 'WIND GUST: ' + data.wind.gust
      document.querySelector('.windSpeed').innerText = 'WIND SPEED: ' + data.wind.speed
    })
    
    
    .catch(error => {
      console.log(`Error ${error}`)
    })
}


