// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
document.querySelector('button').addEventListener('click', getTemperature)

const tempDisplay = document.querySelector('#temperature')

function getTemperature(){
  let city = document.querySelector('#city').value
  let state = document.querySelector('#state').value
  let country = document.querySelector('#country').value

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=_________` //line 11

  document.querySelector('p').hidden = true

  fetch(url)
      .then(res => res.json())
      .then(data => {
        tempDisplay.hidden = false
        tempDisplay.innerText = "It's " + data.main.temp + ' degres F with ' + data.weather[0].description
      })
      .catch(err => {
        document.querySelector('h2').innerText = "Can't find that location. Try again"
          console.log(`error ${err}`)
  });
}
