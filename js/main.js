document.querySelector('button').addEventListener('click', getWeather) /* create event listener for the button */

import { weatherApiKey } from "./apiKeys.js"
// import { radarApiKey } from "apiKeys.js";


function getWeather() {
    let cityLocation = document.querySelector('#cityInput').value;
    let stateLocation = document.querySelector('#stateInput').value;
    let countryLocation = document.querySelector('#countryInput').value;

    let url = `https://api.weatherbit.io/v2.0/current?key=${weatherApiKey}&units=I&city=${cityLocation},${stateLocation}&country=${countryLocation}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // data is of an Object type
            console.log(data.data[0])
            document.querySelector('h4').innerText = `${data.data[0].city_name}, ${data.data[0].state_code}`
            document.querySelector('h2').innerText = `${data.data[0].temp} degrees`
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
}

/*
function autocompleteLocation() {
    let inputDate = document.querySelector('input').value;

    let url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${inputDate}`

    // this should now fetch the Picture of the Day API with the correct date
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // data is of an Object type
            console.log(data)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
}
*/