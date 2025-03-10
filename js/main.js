import {key} from './key.js';
console.log(key);
// let location = 'london,uk'


// console.log(url)

document.querySelector('button').addEventListener('click', getWeather)


function getWeather() {
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    let location = `${city},${country}`
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.resolvedAddress
            document.querySelector('p').innerText = `The weather in ${data.resolvedAddress} is currently ${data.currentConditions.temp} degrees Farenheit.`
        })
    }
    