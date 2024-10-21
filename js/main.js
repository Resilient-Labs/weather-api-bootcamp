/*https://github.com/Resilient-Labs/weather-api-bootcamp > Enter city, country and return the temp in Fahrenheit. We need to find an API that can do that*/

<<<<<<< HEAD
import {apiKey} from "./apiKey"

=======
>>>>>>> 3478808b2948593f7cd678b13d67ee799c13f948
document.querySelector('button').addEventListener('click', changeTemp)

function changeTemp() {

    // city, state, country variables here
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value
    const country = document.getElementById('country').value

<<<<<<< HEAD
    const weather_apiKey = apiKey

    const url = `https://api.weatherbit.io/v2.0/current?key=${weather_apiKey}&city=${city}&state=${state}&country=${country}&temp=${temp}&units=I`
=======
    const apiKey = `078f1762f64346019a99672bf5cc6c5c`

    const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}&state=${state}&country=${country}&temp=${temp}&units=I`
>>>>>>> 3478808b2948593f7cd678b13d67ee799c13f948

    // Variable that holds API

    fetch(url) // connect to API
    .then(res => res.json()) // parse resopnse as JSON. res name doesn't matter. Taking response and formatting it in JSON object
    .then(data => { // Outputting a series of things
        console.log(data)
        console.log(data.data[0].temp)
        console.log(data.data[0].city_name)
        console.log(data.data[0].state_code)
        console.log(data.data[0].country_code)
        
        document.getElementById('temp').innerText = data.data[0].temp
        document.getElementById('city_print').innerText = data.data[0].city_name
        document.getElementById('state_print').innerText = data.data[0].state_code
        document.getElementById('country_print').innerText = data.data[0].country_code

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


// Tested 6 times




/*
app_temp: 60.2

aqi: 11

city_name: "Wilmington"

clouds: 40

country_code: "US"

datetime: "2024-10-15:18"

dewpt: 29.6

dhi: 106

dni: 848

elev_angle: 38.66

ghi: 629

gust: 14.5

h_angle: 15

lat: 39.74595

lon: -75.54659

ob_time: "2024-10-15 17:59"

pod: "d"

precip: 0

pres: 1006

rh: 31

slp: 1008.8

snow: 0

solar_rad: 606.7

sources: ["DEL21", "radar", "satellite"] (3)

state_code: "DE"

station: "DEL21"

sunrise: "11:13"

sunset: "22:22"

temp: 60.2

timezone: "America/New_York"

ts: 1729015140

uv: 3

vis: 9.9

weather: {description: "Few clouds", code: 801, icon: "c02d"}

wind_cdir: "NW"

wind_cdir_full: "northwest"

wind_dir: 315

wind_spd: 6.3
*/