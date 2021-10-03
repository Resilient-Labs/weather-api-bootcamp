let button = document.querySelector('button')
button.addEventListener('click', findWeather)

function findWeather(){
  let cityname = document.querySelector('#city').value
  let countrycode = document.querySelector('#country').value
  let statename = ''
  let findLocation = cityname + ',' + statename + ',' + countrycode
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${findLocation}&appid=ur_not_getting_my_Key`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.main)
      let weatherTemp = (data.main.temp - 273.15)*9/5 +32
      document.querySelector('#weatherResults').innerText = `the current temperature is: ${weatherTemp} degrees Fahrenheit`
    })
}
