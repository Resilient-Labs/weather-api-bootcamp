// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    const city = document.querySelector('#cityIs').value
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=685566c4107e1b2040632ad8b5c8385b&units=imperial`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
      document.querySelector('h2').innerText = data.main.temp
     
      // document.querySelector('h4').innerText = data.sys.country

})
.catch(err => { 
    console.log(`error ${err}`)
})
}