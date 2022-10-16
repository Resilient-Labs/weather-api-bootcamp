

document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
let city = document.querySelector('#city').value
let country = document.querySelector('#country').value
fetch(`https://api.weatherapi.com/v1/current.json?key=c38745e9233c44d6b38143450221510&q=${city},${country}&aqi=no`)
    .then(res => res.json())
    .then(weather => {
       document.querySelector('p').innerText = `It is currently ${weather.current.temp_f}°F in ${city},${country}.`
    })
   .catch(err => {
        console.log(`error${err}`)
    })

}
