// Weather app//
// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// c40ef9d8cf514de6aa6161333262409
document.querySelector("button").addEventListener("click",getInfo)

function getInfo(){

const getWeather = document.querySelector("input").value
console.log (getWeather)

const cityInput = document.getElementById("cityInput").value
console.log (cityInput)

const countryInput = document.getElementById("countryInput").value
console.log (countryInput)



const url = `http://api.weatherapi.com/v1/current.json?key=c40ef9d8cf514de6aa6161333262409&q=${cityInput},${countryInput}`

fetch (url)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector("h2").textContent = data.current.temp_f
    document.querySelector("h3").textContent = data.location.name

})


}
