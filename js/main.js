// https://github.com/Msnape-sys/weather-api-bootcamp.git

let button = document.getElementById('search-btn')
button.addEventListener('click',getWeather)
function getWeather(){
let key = "f188e65b01de8e2535dbcf6829e0ab81"
let city = document.getElementById('input-city').value
let country = document.getElementById('input-country').value

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=imperial`


fetch(url)
.then(res=>res.json())
.then(data =>{
    console.log(data)
let weather = Math.round(data.main.temp)
let p = document.createElement('p')
p.innerText = `The temperature is ${weather} degrees Farenheit.`
let container = document.getElementById('weather')
container.appendChild(p)

})


}

