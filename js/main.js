// Enable your user to enter a city + country and return the temperature in Fahrenheit

// get value from both inputs
// enter in state + country to api using query parameters
// get temperature in Fahrenheit
// post temp to DOM

document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    // gets state and country values from input
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value

    // using Open Weather API to return info
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=aceb6531e182b125c8a27a0b9e506037&units=imperial`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('span').innerText = data.main.temp
        })
        .catch(err => console.log(err))
}