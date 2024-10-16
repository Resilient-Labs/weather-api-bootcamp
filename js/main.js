import {apiKey} from "./apiKey.js";
document.querySelector('button').addEventListener('click', getTemperature)
// https://www.weatherbit.io/api/weather-current

function getTemperature(){
    const city = document.querySelector('#city').value
    const state = document.querySelector('#state').value
    const country = document.querySelector('#country').value
    fetch(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}&state=${state}&country=${country}&units=I`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.data[0].temp)
            document.querySelector('#temperature').innerText = `${data.data[0].temp} °F`
        })
        .catch(err => {
        console.log(`error ${err}`)
    });
}
