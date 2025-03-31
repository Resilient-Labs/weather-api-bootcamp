// https://openweathermap.org/current
let getInfo = document.querySelector('button').addEventListener('click', getTemperature)
function getTemperature() {
    let getLocationCity = document.querySelector('#city')
    let getLocationCountry = document.querySelector('#country')
    let cityLocation = getLocationCity.value
    let countryLocation = getLocationCountry.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLocation},${countryLocation}&appid=9cecef43acb52d2de11ead743237c55a&units=imperial
`)
        .then(res => res.json())
        .then(data =>
            document.querySelector('h2').innerText = `${'The Current Temperature in ' + cityLocation + ', ' + countryLocation + ' is: ' + data.main.temp + ' F'}`
        )
        .catch(err => {
            console.log(`error ${err}`)
        })
}
