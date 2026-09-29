//create a variable for our API key
import { API_KEY } from "./config.js";

const api_key = API_KEY;

//add event listener to 'get weather' button so we can create function

document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    //adding user input component
    let location = document.querySelector('input').value
    console.log(location)

    //just get it working with one city
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=1&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(weather_data => {
            //gets the entire json file
            console.log(weather_data)
            
            //found where the temp in f is an made that a variable
            let tempf = weather_data.forecast.forecastday[0].day.avgtemp_f
            let outside = weather_data.forecast.forecastday[0].day.condition.text
            // console.log(outside)
            // console.log(`Today's temperature is ${tempf}°F`)
            //insert the data onto the html page
            document.querySelector('h2').innerText = `The temperature in ${location} today is ${tempf}° F`
            document.querySelector('h3').innerText = `Outside Conditions: ${outside}`
            document.querySelector('img').src = weather_data.forecast.forecastday[0].day.condition.icon
        })

}