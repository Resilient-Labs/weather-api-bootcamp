document.querySelector('button').addEventListener('click', findWeather)

function findWeather(){
const rawCity = document.querySelector('.input').value
const rawCountry = document.querySelector('.input1').value
let city = rawCity.toLowerCase();
let country = rawCountry.toLowerCase();
console.log(city)
console.log(country)
const link = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=0354f1a1a2fd6e2d1e2053079a512ae7&units=imperial`
fetch(link)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('.span').innerText = `${data.coord.lat}`
    document.querySelector('.span2').innerText = `${data.coord.lon}`
    document.querySelector('.symbol').style.visibility = 'initial'
    document.querySelector('.span3').innerText = `${data.main.temp} `
    document.querySelector('.span4').innerText = `${data.weather[0].description}`
    document.querySelector('.fspan').innerText = `${data.name}, ${data.sys.country}`
  })






}