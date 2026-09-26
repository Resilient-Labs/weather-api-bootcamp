// FLOW: button click --> function runs --> read city input --> create API request --> fetch() --> .json() --> inspect returned object --> use dot notation to pull out temperature --> put temperature into the DOM
// - city and country are gathered from the inputs
// - WeatherAPI recieves the request
// - fetch() returns the data
// - data.location.name & data.location.country are rendered into #location
// - data.current.temp_f is rendered into #temperature

document.querySelector('#searchWeather').addEventListener('click', getWeather)

function getWeather(){
    const city = document.querySelector('#city').value 
    const country = document.querySelector('#country').value 

    // console.log(city)
    // console.log(country)

    const apiKey = '56ef9e70c3a5408fa66182949262609'

    const location = `${city}, ${country}`
// Changed ${location} to ${encodeURIComponent(location)} b/c encodeURIComponent will turn city and country into a URL-safe query value.
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`

    // console.log(url)

    // Put fetch inside function so it can run when an event listener fires
    // - data is the whole object WeatherAPI sent back
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            document.querySelector('#location').innerText = 
            `${data.location.name}, ${data.location.country}`

            document.querySelector('#temperature').innerText =
            `${data.current.temp_f}°F`
        })
}

