// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
/*
The q= is built into this API but it's going to be something that's only going to be used by the API
After APIKey add an & and units to make it work
*/

// API URL: https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
/* Parameters: appid = API Key; 
q= ${city}, ${country}
API KEY: e0b2a9491e2774b97bb54f7445436204
*/

// I went through the general strucutre of this with Abdirahman Mohamed
document.querySelector('button').addEventListener('click', getWeather)

function getWeather () {
const city = document.querySelector('#cityInput').value
const country = document.querySelector('#countryInput').value    
const apiKey = "e0b2a9491e2774b97bb54f7445436204"
const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`
fetch (url)
    .then (res => res.json ())
    .then (data => {
        console.log(data);
        document.querySelector('h3').innerText = data.main.temp + "°" + ' ' + "Fahrenheit"
    })
    .catch (error => {
        console.log(`error ${error}`);
    }) 

}