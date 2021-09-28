//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
//have an input area for country and city
//have a button/or hit enter key to go to a function that grabs the object from api

document.querySelector('.button').addEventListener('click', getLocation)

function getLocation(){
  let city = document.querySelector('#cityInput').value
  let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b63e2f9db34e2b9c2332cb18f8b3509c`
  
  fetch(weatherLink)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let fahrenheit = ((data.main.temp - 273.15) * 9/5) + 32
    document.querySelector('h3').innerText = data.name
    document.querySelector('h4 span').innerText = `The Temperature Is ${Math.round(fahrenheit)} °F
`
  })
  .catch(err => {
    console.log(`Error - Location Not Found ${err}`)
  })
}


