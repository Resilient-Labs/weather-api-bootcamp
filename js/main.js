// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
document.querySelector('button').addEventListener('click', getTemperature)

const tempDisplay = document.querySelector('#temperature')

function getTemperature(){
  let city = document.querySelector('#city').value
  let state = document.querySelector('#state').value
  let country = document.querySelector('#country').value

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=__________________________`

  fetch(url)
      .then(res => res.json())
      .then(data => {
        tempDisplay.innerText = data.main.temp
        console.log(data)
      })
      .catch(err => {
        document.querySelector('h2').innerText = 'Oh, no! There seems to be an error'
          console.log(`error ${err}`)
  });
}