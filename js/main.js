document.querySelector('button').addEventListener('click', findWeather)

function findWeather(){
const rawCity = document.querySelector('.input').value
const rawCountry = document.querySelector('.input1').value
let city = rawCity.toLowerCase();
let country = rawCountry.toLowerCase();
console.log(city)
console.log(country)
const link = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a7fdf34d85817aedc68297b66cd98ba5&units=imperial`
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