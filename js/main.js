// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// CREDIT TO https://openweathermap.force.com/s/article/switching-between-temperature-units-2019-10-24-21-47-24 + https://dev.to/areeburrub/using-weather-api-with-javascript-3a04

document.querySelector("button").addEventListener("click", getWeather)

function getWeather(){
  let city = document.querySelector("#city").value
  let country = document.querySelector("#country").value

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=82e9d72929eaf7ea6d5bf266443ef7a6`

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

    document.querySelector('h3').innerText = data.name
    document.querySelector('h2').innerText = `Temperature: ${data.main.temp}℉` 
    document.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.querySelector('p').innerText = data.weather[0].description

    console.log(data)
  })

  .catch(err => {
    console.log(`error ${err}`)

  })

}
